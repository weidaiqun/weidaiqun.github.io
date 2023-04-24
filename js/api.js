
$(function () { //获取处理友链数据
    $.getJSON("../json_data/api.json", function (data) {

        $('.links-content').html("");        
        let notValid = data.filter((item, a, b) => item.valid == 0);
        let notValid1 = data.filter((item, a, b) => item.valid == 1);     
    if (notValid.length > 0) {
        $('.links-content').append("<h4 class=\"text-gray\"><i class=\"linecons-tag\" style=\"margin-right:7px\" id=\"办公接口\"></i>办公接口</h4>");
     var html="";
        $.each(notValid, function (i, e) {
       html+= " <div class=\"col-sm-3\">";
       html+="  <div class=\"xe-widget xe-conversations box2 label-info\" onclick=\"window.open(&quot;"+e.url+"&quot;,&quot;_blank&quot;)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\""+e.url+"\">";
       html+="<div class=\"xe-comment-entry\">"; 
       html+="<a class=\"xe-user-img\">";
       html+="<img data-src=\"/img/links/nopic.jpg\" class=\"lozad img-circle\" width=\"40\" src=\"/img/links/nopic.jpg\" data-loaded=\"true\"></a>";
        html +="<div class=\"xe-comment\"> " ;           
        html +=    " <a href=\"#\" class=\"xe-user-name overflowClip_1\"><strong>" + e.name + "</strong></a>" ;
        html +=    "<p class=\"overflowClip_2\">" + e.desc + "</p>";
        html +=    " </div></div></div></div>";

       // $('.links-content').append(html);
        
    });  
    $('.links-content').append("<div class=\"row\">"+html+"</div><br/>");
  
    }

    if (notValid1.length > 0) {
        $('.links-content').append("<h4 class=\"text-gray\"><i class=\"linecons-tag\" style=\"margin-right:7px\" id=\"其他接口\"></i>其他接口</h4>");
     var html="";
        $.each(notValid1, function (i, e) {
       html+= " <div class=\"col-sm-3\">";
       html+="  <div class=\"xe-widget xe-conversations box2 label-info\" onclick=\"window.open(&quot;"+e.url+"&quot;,&quot;_blank&quot;)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"\" data-original-title=\""+e.url+"\">";
       html+="<div class=\"xe-comment-entry\">"; 
       html+="<a class=\"xe-user-img\">";
       html+="<img data-src=\"/img/links/nopic.jpg\" class=\"lozad img-circle\" width=\"40\" src=\"/img/links/nopic.jpg\" data-loaded=\"true\"></a>";
        html +="<div class=\"xe-comment\"> " ;           
        html +=    " <a href=\"#\" class=\"xe-user-name overflowClip_1\"><strong>" + e.name + "</strong></a>" ;
        html +=    "<p class=\"overflowClip_2\">" + e.desc + "</p>";
        html +=    " </div></div></div></div>";

        //$('.links-content').append(html);
    });  
    $('.links-content').append("<div class=\"row\">"+html+"</div><br/>");
  
    }






    })
});
