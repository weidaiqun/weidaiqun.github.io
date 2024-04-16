$(function () { // 获取记录数据
    $.getJSON("/json_data/works.json", function (data) {
        let xiaoxianxinData = data.filter((item, a, b) => item.valid == 0);
        let juchengData = data.filter((item, a, b) => item.valid == 1);
        let jiaruanData = data.filter((item, a, b) => item.valid == 2);
        let qitaData = data.filter((item, a, b) => item.valid == 3);
    //alert(JSON.stringify(xiaoxianxinData));
        //if (xiaoxianxinData > 0) {
            $.each(xiaoxianxinData, function (i, e) {
              var url="#";
              var herfbeginhtml="";
              var hrefendhtml="";
              if(e.url!=""){
                url=e.url;
                herfbeginhtml='<a href=\''+url+'\' target="_blank">';  
                hrefendhtml='</a>';
              }
             
                var html = '<div class="c-app-item app" draggable="true">' +
                    '<div class="c-app-item-container">' +
                    ' <div class="c-app-item-cover">' +
                    ' <div class="app-cover">' +
                    '<div class=\"c-cover-image\" style=\"width: 224px; height: 160px; background: url(\''+e.ImgUrl+'\') center top/cover no-repeat;\"></div>' +
                    ' </div>' +
                    '<div class="app-mask"></div><div class="app-type-icons"><div class="app-content-icons"><div class="dsm-c-tooltip"><div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_hybrid_prototype dsm-c-icon-orea" style="font-size: 16px; width: 20px; height: 20px; color: rgb(255, 255, 255);"></i></div></div></div></div>' +
                    '<div class="c-app-item-info">' +
                    '<div class="app-name-container" style="text-align: center;">' +
                    '<div class="name-wrapper" style="max-width: calc(100% - 20px);">' +
                    '<div class="dsm-c-tooltip"><span class="name">' + e.Title + '</span></div><span class="compare">' + e.Title+'</span>' +
                    '<i class="dsm-c-icon idoc_iconfont icon-_tree_edit dsm-c-icon-solid" style="font-size: 16px; width: 16px; height: 16px;"></i>' +
                    '</div>' +
                    '</div><div class="app-info-container time">' +
                    '<span>' + e.Author+'</span><span class="split-dot">·</span>' +
                    '<span>'+e.Date+'</span>' +
                    '</div><div class="app-info-container visibility">'+e.Type+'</div>' +
                    '</div><div class="c-app-item-left-btn">' +
                    '<div class="dsm-c-tooltip">' +
                    '<div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_collect dsm-c-icon-orea" style="font-size: 16px; width: 28px; height: 28px; color: rgb(255, 179, 0);"></i>' +
                    '</div>' +
                    '</div>' +
                    '<div class="c-app-item-right-btn"></div>' +
                    '</div>' +
                    '</div>';
                   
                $('#xiaotianxin').append(herfbeginhtml+html+hrefendhtml);
            });
        //}
        $.each(juchengData, function (i, e) {
            var url="#";
            var herfbeginhtml="";
            var hrefendhtml="";
            if(e.url!=""){
              url=e.url;
              herfbeginhtml='<a href=\''+url+'\' target="_blank">';  
              hrefendhtml='</a>';
            }
              var html = '<div class="c-app-item app" draggable="true">' +
                  '<div class="c-app-item-container">' +
                  ' <div class="c-app-item-cover">' +
                  ' <div class="app-cover">' +
                  '<div class=\"c-cover-image\" style=\"width: 224px; height: 160px; background: url(\''+e.ImgUrl+'\') center top/cover no-repeat;\"></div>' +
                  ' </div>' +
                  '<div class="app-mask"></div><div class="app-type-icons"><div class="app-content-icons"><div class="dsm-c-tooltip"><div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_hybrid_prototype dsm-c-icon-orea" style="font-size: 16px; width: 20px; height: 20px; color: rgb(255, 255, 255);"></i></div></div></div></div>' +
                  '<div class="c-app-item-info">' +
                  '<div class="app-name-container" style="text-align: center;">' +
                  '<div class="name-wrapper" style="max-width: calc(100% - 20px);">' +
                  '<div class="dsm-c-tooltip"><span class="name">' + e.Title + '</span></div><span class="compare">' + e.Title+'</span>' +
                  '<i class="dsm-c-icon idoc_iconfont icon-_tree_edit dsm-c-icon-solid" style="font-size: 16px; width: 16px; height: 16px;"></i>' +
                  '</div>' +
                  '</div><div class="app-info-container time">' +
                  '<span>' + e.Author+'</span><span class="split-dot">·</span>' +
                  '<span>'+e.Date+'</span>' +
                  '</div><div class="app-info-container visibility">'+e.Type+'</div>' +
                  '</div><div class="c-app-item-left-btn">' +
                  '<div class="dsm-c-tooltip">' +
                  '<div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_collect dsm-c-icon-orea" style="font-size: 16px; width: 28px; height: 28px; color: rgb(255, 179, 0);"></i>' +
                  '</div>' +
                  '</div>' +
                  '<div class="c-app-item-right-btn"></div>' +
                  '</div>' +
                  '</div>';
                 
              $('#jucheng').append(herfbeginhtml+html+hrefendhtml);
          });

            //佳软
            $.each(jiaruanData, function (i, e) {
                var url="#";
                var herfbeginhtml="";
                var hrefendhtml="";
               
                if(e.url!=""){
                  url=e.url;
                  herfbeginhtml='<a href=\''+url+'\' target="_blank">';  
                  hrefendhtml='</a>';
                }
                  var html = '<div class="c-app-item app" draggable="true">' +
                      '<div class="c-app-item-container">' +
                      ' <div class="c-app-item-cover">' +
                      ' <div class="app-cover">' +
                      '<div class=\"c-cover-image\" style=\"width: 224px; height: 160px; background: url(\''+e.ImgUrl+'\') center top/cover no-repeat;\"></div>' +
                      ' </div>' +
                      '<div class="app-mask"></div><div class="app-type-icons"><div class="app-content-icons"><div class="dsm-c-tooltip"><div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_hybrid_prototype dsm-c-icon-orea" style="font-size: 16px; width: 20px; height: 20px; color: rgb(255, 255, 255);"></i></div></div></div></div>' +
                      '<div class="c-app-item-info">' +
                      '<div class="app-name-container" style="text-align: center;">' +
                      '<div class="name-wrapper" style="max-width: calc(100% - 20px);">' +
                      '<div class="dsm-c-tooltip"><span class="name">' + e.Title + '</span></div><span class="compare">' + e.Title+'</span>' +
                      '<i class="dsm-c-icon idoc_iconfont icon-_tree_edit dsm-c-icon-solid" style="font-size: 16px; width: 16px; height: 16px;"></i>' +
                      '</div>' +
                      '</div><div class="app-info-container time">' +
                      '<span>' + e.Author+'</span><span class="split-dot">·</span>' +
                      '<span>'+e.Date+'</span>' +
                      '</div><div class="app-info-container visibility">'+e.Type+'</div>' +
                      '</div><div class="c-app-item-left-btn">' +
                      '<div class="dsm-c-tooltip">' +
                      '<div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_collect dsm-c-icon-orea" style="font-size: 16px; width: 28px; height: 28px; color: rgb(255, 179, 0);"></i>' +
                      '</div>' +
                      '</div>' +
                      '<div class="c-app-item-right-btn"></div>' +
                      '</div>' +
                      '</div>';
                     
                  $('#jiaruan').append(herfbeginhtml+html+hrefendhtml);
              });

              //其他
            $.each(qitaData, function (i, e) {
                var url="#";
                var herfbeginhtml="";
                var hrefendhtml="";
                if(e.url!=""){
                  url=e.url;
                  herfbeginhtml='<a href=\''+url+'\' target="_blank">';  
                  hrefendhtml='</a>';
                }
                  var html = '<div class="c-app-item app" draggable="true">' +
                      '<div class="c-app-item-container">' +
                      ' <div class="c-app-item-cover">' +
                      ' <div class="app-cover">' +
                      '<div class=\"c-cover-image\" style=\"width: 224px; height: 160px; background: url(\''+e.ImgUrl+'\') center top/cover no-repeat;\"></div>' +
                      ' </div>' +
                      '<div class="app-mask"></div><div class="app-type-icons"><div class="app-content-icons"><div class="dsm-c-tooltip"><div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_hybrid_prototype dsm-c-icon-orea" style="font-size: 16px; width: 20px; height: 20px; color: rgb(255, 255, 255);"></i></div></div></div></div>' +
                      '<div class="c-app-item-info">' +
                      '<div class="app-name-container" style="text-align: center;">' +
                      '<div class="name-wrapper" style="max-width: calc(100% - 20px);">' +
                      '<div class="dsm-c-tooltip"><span class="name">' + e.Title + '</span></div><span class="compare">' + e.Title+'</span>' +
                      '<i class="dsm-c-icon idoc_iconfont icon-_tree_edit dsm-c-icon-solid" style="font-size: 16px; width: 16px; height: 16px;"></i>' +
                      '</div>' +
                      '</div><div class="app-info-container time">' +
                      '<span>' + e.Author+'</span><span class="split-dot">·</span>' +
                      '<span>'+e.Date+'</span>' +
                      '</div><div class="app-info-container visibility">'+e.Type+'</div>' +
                      '</div><div class="c-app-item-left-btn">' +
                      '<div class="dsm-c-tooltip">' +
                      '<div class="tips down center size-s"></div><i class="dsm-c-icon idoc_iconfont icon-_collect dsm-c-icon-orea" style="font-size: 16px; width: 28px; height: 28px; color: rgb(255, 179, 0);"></i>' +
                      '</div>' +
                      '</div>' +
                      '<div class="c-app-item-right-btn"></div>' +
                      '</div>' +
                      '</div>';
                     
                  $('#qita').append(herfbeginhtml+html+hrefendhtml);
              });
    })
});