$('.jsTransComCalc').click(function() {
    $('.jsTransComRes').text('1.20 грн');
    $(this).text('Виконати переказ');
});

$('.jsSbTabsButtons li span').click(function() {
    $('.jsSbTabsButtons li').removeClass('is-active');
    $(this).parent().addClass('is-active');
    var tabButtonIndex = $(this).parent().index() + 1;
    $('.jsSbTabsContList div').removeClass('is-active');
    $('.jsSbTabsContList div:nth-child(' + tabButtonIndex + ')').addClass('is-active');
});
