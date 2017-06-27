
import _ from 'lodash';
function component() {
    var ele=document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    ele.innerHTML=_.join(['Hello','webpack'],'');
    return ele;
}
document.body.appendChild(component());
