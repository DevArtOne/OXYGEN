"use strict";



$(function () {

    let header = $("#header");
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle")

    checkScroll(scrollPos, headerH)

    $(window).on("scroll resize", function () {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerH)
    });

    function checkScroll(scrollPos, headerH) {

        if (scrollPos > headerH) {
            document.querySelector(".header").style.height = "60px";
        } else {
            document.querySelector(".header").style.height = "100px";

        }


    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 700)

    });

    navToggle.on("click", function (event) {
        event.preventDefault();

        nav.toggleClass("show");




    });

    let slider = $("#featurSlider");

    slider.slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true
    });



})


function showHidde() {
    let hideContact = document.getElementById("hide").style.height;
    if (hideContact == "489px") {
        document.querySelector(".hide").style.height = "0px";
    } else {
        document.querySelector(".hide").style.height = "489px";
    }
}