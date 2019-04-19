import _ from 'lodash'
import printMe from './print.js';
import "./css/style.css"
function component() {
    var element = document.createElement('div');
       var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

       btn.innerHTML = 'Click me and check the console!';
    element.classList.add('hello')
       btn.onclick = printMe;

           element.appendChild(btn);

    return element;
}

document.body.appendChild(component());