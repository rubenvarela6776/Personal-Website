/**
 * Created by rubenvarela on 12/14/16.
 */
(function() {
    "use strict";

    // // portfolioTabs.hover(
    // //     function() {
    // //         $(this).children("a").children("h1").css("font-size", "43px");
    // //     }, function () {
    // //         $(this).children("a").children("h1").css("font-size", "35px");
    // //     }
    // // );

    var portfolioHeaders = $(".portfolioHeaders");
    var tabsOpen = [];

    portfolioHeaders.click(function() {
        $(this).parent().parent().children("div").slideDown("slow");
        tabsOpen.push($(this).parent().parent().children("div"));
        closeTabs();
    });

    $(".closeTab").click(function() {
        $(this).parents("div").parent().last().slideUp("slow");
        tabsOpen.shift();
    });

    $(".previousTab").click(function() {
        $(this).parent().parent().parent().prev("div").children().slideDown("slow");
        tabsOpen.push($(this).parent().parent());
        closeTabs();
    });

    $(".nextTab").click(function() {
        $(this).parent().parent().parent().next("div").children().slideDown("slow");
        tabsOpen.push($(this).parent().parent());
        closeTabs();
    });

    function closeTabs() {
        console.log(tabsOpen);
        if(tabsOpen.length > 1) {
            tabsOpen[0].slideUp("slow");
            tabsOpen.shift();
        }
        console.log(tabsOpen);
    }

})();
