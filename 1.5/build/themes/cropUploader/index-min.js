/*!build time : 2013-09-24 3:10:12 PM*/
KISSY.add("gallery/uploader/1.5/themes/imageUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e="",f=b.all;return a.extend(d,c,{_addHandler:function(a){var b=this,c=a.file,d=c.id,e=c.target,g=f(".J_Del_"+d);e.on("mouseover mouseout",function(a){"mouseover"==a.type?(g.show(),b._setDisplayMsg(!0,c)):(g.hide(),b._setDisplayMsg(!1,c))}),g.data("data-file",c),g.on("click",b._delHandler,b)},_removeHandler:function(){this._setCount()},_startHandler:function(){},_progressHandler:function(){},_successHandler:function(a){var b=this,c=a.file,d=c.id,e=c.result;b._setCount(),e&&b._changeImageSrc(a),f(".J_Mask_"+d).hide();var g=b.get("uploader"),h=g.getPlugin("proBars");if(!h){var i=c.target;if(!i)return!1;i.all(".J_ProgressBar_"+d).hide()}},_errorHandler:function(b){var c=this,d=b.msg||b.result.msg||b.result.message,e=b.file;if(!e)return!1;var g=b.file.id;f(".J_ErrorMsg_"+g).html(d),c._setDisplayMsg(!0,b.file),a.log(d)},_setCount:function(){var a=this,b=a.get("elCount");if(!b.length)return!1;var c=a.get("uploader"),d=c.getPlugin("auth");if(!d)return!1;var e=d.get("max");if(!e)return!1;var f=a.getFilesLen();b.text(Number(e)-f)},_setDisplayMsg:function(a,b){if(!b)return!1;var c=f(".J_Mask_"+b.id);return c.parent("li")&&c.parent("li").hasClass("error")?!1:(c[a&&"show"||"hide"](),void 0)},_delHandler:function(a){var b=this,c=b.get("uploader"),d=c.get("queue"),e=f(a.target).data("data-file"),g=d.getFileIndex(e.id),h=e.status;("start"==h||"progress"==h)&&c.cancel(g),d.remove(g)},getFilesLen:function(a){a||(a="success");var b=this,c=b.get("queue"),d=c.getFiles(a);return d.length},_changeImageSrc:function(b){var c=b.file,d=c.id,g=b.result,h=g.url,i=f(".J_Pic_"+d);(i.attr("src")==e||a.UA.safari)&&(i.show(),i.attr("src",h))}},{ATTRS:{name:{value:"imageUploader"},fileTpl:{value:'<li id="queue-file-{id}" class="g-u" data-name="{name}"><div class="pic"><a href="javascript:void(0);"><img class="J_Pic_{id} preview-img" src="" /></a></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper"><div class="status waiting-status"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u670d\u52a1\u5668\u6545\u969c\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01</p></div></div><a class="J_Del_{id} del-pic" href="#">\u5220\u9664</a></li>'},allowExts:{value:"jpg,png,gif,jpeg"},authMsg:{value:{max:"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u56fe\u7247\uff01",maxSize:"\u56fe\u7247\u8d85\u8fc7{maxSize}\uff01",required:"\u81f3\u5c11\u4e0a\u4f20\u4e00\u5f20\u56fe\u7247\uff01",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",allowRepeat:"\u8be5\u56fe\u7247\u5df2\u7ecf\u5b58\u5728\uff01",widthHeight:"\u56fe\u7247\u5c3a\u5bf8\u4e0d\u7b26\u5408\u8981\u6c42\uff01"}},elCount:{value:"#J_UploadCount",getter:function(a){return f(a)}}}}),d},{requires:["node","gallery/gallery/uploader/1.5/theme"]}),KISSY.add("gallery/uploader/1.5/themes/cropUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}return b.all,a.extend(d,c,{render:function(){var a=this;d.superclass.render.call(a);var b=a.get("uploader");b.set("multiple",!1)},_selectHandler:function(){var a=this,b=a.get("queue"),c=b.get("files").length;c&&b.clear()},_addHandler:function(){}},{ATTRS:{name:{value:"cropUploader"},fileTpl:{value:'<div class="uploader-img-wrapper"><div class="uploader-img J_CropArea_{id}"></div><div class=" J_Mask_{id} pic-mask"></div><div class="status-wrapper"><div class="status waiting-status"><p>\u7b49\u5f85\u4e0a\u4f20\uff0c\u8bf7\u7a0d\u5019</p></div><div class="status start-status progress-status success-status"><div class="J_ProgressBar_{id}"><s class="loading-icon"></s>\u4e0a\u4f20\u4e2d...</div></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u4e0a\u4f20\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\uff01</p></div></div></div>'}}}),d},{requires:["node","../imageUploader/index"]});