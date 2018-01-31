
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
import  "./assets/css/main.css";

import $ from "jquery";
import 'bootstrap/js/tab';



console.log("bd3");
$(function () {
    $('a').bind("click", function(e){

        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });

    //导航栏消失

    $(window).scroll(function() {
        if($(document).scrollTop() > 100) {
            $('.navbar-fixed-top').addClass('navbar-solid-color');
        }else {
            $('.navbar-fixed-top').removeClass('navbar-solid-color');
        }
    });
});