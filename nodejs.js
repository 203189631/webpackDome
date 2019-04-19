const fs = require('fs');
const path = require('path');


// let suffixArr = []
// let folder = []
const next = '/'

/*fs.exists('./dist', function (exists) {//判断并新建存入文件位置。暂时
    if (!exists) {
        fs.mkdir('./dist/', () => {
            fs.mkdir('./dist/js', () => {
                searchHtml('./src')
            })
        })
    } else {
        fs.exists('./dist/js', (exists) => {
            if (!exists) {
                fs.mkdir('./dist/js', () => {
                    searchHtml('./src')
                })
            } else {
                searchHtml('./src')
            }
        })
    }
})
*/
searchHtml('./src')
function searchHtml(src) {
    const data = fs.readdirSync(src)
    data.forEach((item, index) => {
        const suffix = path.extname(item)//获取后缀
        if (!suffix) {
            searchHtml(src + next + item)
        } else if (suffix == '.html') {
            let name = src + next + item
            let html = fs.readFileSync(name).toString().split('\n')
            let start = [],url,deleteCount = 0;
            name = name.split('.html')[0]
            html.map((item, index) => {
                if ( start.length%2 == 0 && item.includes("<script") && !item.includes("src=")) {
                    start.push(index+1)
                    html[index] = `<script type="text/javascript" src="${name+index+'.js'}">`
                } else if (start.length%2 != 0 && item.includes('</script>')) {
                    let one = start[start.length-1]
                    fs.writeFileSync(name+index+'.js',html.slice(one,index).join("\n"))//新建文件写入js代码
                    start.push(index)
                }
            })
            start.map((item,index)=>{//通过js代码位置删除js代码
                if(index%2 != 0){
                    let one = start[index-1];
                    html.splice(one - deleteCount,item-one)//删除js
                    deleteCount += item-one;//获取html删除行数用以计算起始位置
                }
            })
            html = html.join('\n')
            fs.writeFileSync(src+next+item,html)//修改原html文件
        }
    })
}

