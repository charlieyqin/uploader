/*!build time : 2013-10-23 10:10:24 AM*/
KISSY.add("gallery/uploader/1.5/token",function(a,b){function c(){var a=arguments[1]||location.hostname,b=a.split("."),c=b.length,d=arguments[0]||(3>c?0:1);return(d>=c||2>c-d)&&(d=c-2),b.slice(d).join(".")}function d(){var a=c(-1);return"net"==a}function e(a,c){if(!a)return!1;var e=d()&&f||g;b.jsonp(e,function(b){var d=b.value;if(d){var b=a.get("data");b._tb_token_=d}c&&c(b)})}var f="http://aop.widgets.daily.taobao.net/block/getReqParam.htm",g="http://aop.widgets.taobao.com/block/getReqParam.htm";return e},{requires:["ajax"]}),KISSY.add("gallery/uploader/1.5/plugins/miniLogin/miniLogin",function(a,b,c,d,e){function f(a){var b=this;f.superclass.constructor.call(b,a)}return b.all,a.extend(f,c,{pluginInitializer:function(a){return a?(a.on("select",function(){var b=e.check();if(!b){var c=a.get("autoUpload"),f=!1;c&&(a.set("autoUpload",!1),f=!0),e.show({},function(){d(a,function(){a.uploadFiles()}),f&&a.set("autoUpload",!0)})}}),void 0):!1}},{ATTRS:{pluginId:{value:"miniLogin"}}}),f},{requires:["node","base","../../token","tbc/mini-login/1.4.0/"]});