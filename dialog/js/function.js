/**
 * Created by Administrator on 2017/8/14.
 */

var dialog={};
dialog.alert = function (data) {
    data.type = 'alert';
    data.width = '270px';
    data.title = data.title ? data.title : '温馨提示';
    data.okText = data.okText ? data.okText : "知道了";
    return $.dialog(data);
};

dialog.confirm = function (data) {
    data.type = 'confirm';
    data.width = '270px';
    return $.dialog(data);
};

dialog.loading = function (con) {
    return $.dialog({content: con, titleIcon: "load", width: '230px', type: "loading"});
};

dialog.tusiSuccess = function (con) {
    return $.dialog({content: con, titleIcon: "success", width: '230px', type: "tusi", time: 1000});
};

dialog.tusiError = function (con , time) {
    time = time ? time : 3000;
    return $.dialog({content: con, titleIcon: "error", width: '230px', type: "tusi", time: time});
};

dialog.tusi = function (con) {
    return $.dialog({content: con, width: '230px', type: "tusi", time: 1000});
};