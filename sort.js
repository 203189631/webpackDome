let arr = [23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4,23,7, 24, 25, 2, 35, 2, 1, 3, 11, 4]

function bubbleSort2(arr) {
    console.time('改进后冒泡排序耗时');
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos= j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
    }
    console.timeEnd('改进后冒泡排序耗时');
    return arr;
}


function bubbleSort(arr) {
    console.time('改进前冒泡排序耗时');
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.timeEnd('改进前冒泡排序耗时');
    return arr;
}
// bubbleSort(arr)
bubbleSort2(arr)

