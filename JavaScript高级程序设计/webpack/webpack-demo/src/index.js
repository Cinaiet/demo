
import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';


function component() {
    var ele=document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    ele.innerHTML=_.join(['Hello','webpack'],'');
    ele.classList.add('hello');

    //将图片添加到现有的div中

    /*var myIcon=new Image();
    myIcon.src=Icon;
    ele.appendChild(myIcon);*/

    console.log(Data);

    return ele;
}
document.body.appendChild(component());
