
//在app中使用header和footer模块。
var header=require('./header');
var footer=require('./footer');

var img1=new Image();
var img2=document.createElement('img');

var src1=require('../img/img.jpg');

img1.src=src1;

document.body.appendChild(img1);


//执行
header();

footer.say();

footer.talks();