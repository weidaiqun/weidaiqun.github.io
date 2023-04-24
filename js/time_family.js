$(function () { // 获取记录数据
    $.getJSON("/json_data/familyData.json", function (data) {
        $.each(data, function (i, e) {
            var html = '<li class="time-axis-item">' +
                '<div class="time-axis-date">' + e.date + '<span></span></div>' +
                '<div class="time-axis-title">' + e.title + '</div>' +
                '<p class="time-axis-achievement">' + e.ms + '</p>' +
                '</li>';
            $('.time-axis').append(html);
        });
    })
});
