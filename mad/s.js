// all functions ------------------
function initBionick() {
    "use strict";
	// window load  ------------------
	$(window).load(function() {
		var a = [],
		b = window.location.href.split("#")[1],
		c = $("header").outerHeight(true),
		hb = $("html, body");
		$(".scroll-nav a").each(function() {
			var b = new Image();
			b.src = $(this).data("bgscr");
			a.push(b);
		});
		$(".loader").fadeOut(500, function() {
			$("#main").animate({
				opacity: "1"
			}, 500);
			contanimshow();
		});
		if (b && $("#" + b).length) {
			hb.animate({
				scrollTop: 0
			}, 1);
			setTimeout(function() {
				hb.animate({
					scrollTop: $("#" + b).offset().top - c
				}, {
					queue: false,
					duration: 800,
					easing: "easeInOutExpo"
				});
			}, 1550);
		}
	});
    function ahc() {
        $(" .fwslider .item").css({
            height: $(".fwslider").outerHeight(true)
        });
        $(" .slideshow-wrap .item").css({
            height: $(".slideshow-wrap").outerHeight(true)
        });
        $(".fw-title").css({
            "margin-top": -1 * $(".fw-title").height() / 2 + "px"
        });
        $(".height-emulator").css({
            height: $("footer").outerHeight(true)
        });
        $(".nav-inner nav ").css({
            "margin-top": -1 * $(".nav-inner nav ").height() / 2 + "px"
        });
    }
    ahc();
    $(window).resize(function() {
        ahc();
    });
	$(".project-pagination , .fixed-filter , .searh-holder").addClass("in-anim");
    $(".wrapper-inner , .fixed-column , footer , .hero-wrapper").addClass("viselem");
    $("nav li.subnav a").append('<i class="fa fa-angle-double-down subnavicon"></i>');
	// magnificPopup ------------------
    $(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: false,
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom",
        image: {
            verticalFit: false
        }
    });
    $(".popup-youtube, .popup-vimeo , .show-map").magnificPopup({
        disableOn: 700,
        type: "iframe",
        removalDelay: 600,
        mainClass: "my-mfp-slide-bottom"
    });
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        fixedContentPos: true,
        fixedBgPos: true,
        tLoading: "Loading image #%curr%...",
        removalDelay: 600,
        closeBtnInside: true,
        zoom: {
            enabled: true,
            duration: 700
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [ 0, 1 ]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
	// owlCarousel ------------------
    var h = $(".single-slider");
    h.owlCarousel({
        items: 1,
        nav: false,
        autoHeight: false
    });
    $(".single-slider-holder a.next-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(h).trigger("next.owl.carousel");
    });
    $(".single-slider-holder a.prev-slide").on("click", function() {
        $(this).closest(".single-slider-holder").find(h).trigger("prev.owl.carousel");
    });
    var sc = $(".services-carusel");
    sc.owlCarousel({
        items: 3,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            756: {
                items: 2,
                nav: false
            },
            1036: {
                items: 2,
                nav: false
            },
            1236: {
                items: 3,
                nav: false
            }
        }
    });
    $(".ser-carous-holder a.next-slide").on("click", function() {
        $(this).closest(".ser-carous-holder").find(sc).trigger("next.owl.carousel");
    });
    $(".ser-carous-holder a.prev-slide").on("click", function() {
        $(this).closest(".ser-carous-holder").find(sc).trigger("prev.owl.carousel");
    });
    var fw = $(".fwslider");
    fw.owlCarousel({
        items: 1,
        nav: false
    });
    $(".fwslider-holder a.next-slide").on("click", function() {
        $(this).closest(".fwslider-holder").find(fw).trigger("next.owl.carousel");
    });
    $(".fwslider-holder a.prev-slide").on("click", function() {
        $(this).closest(".fwslider-holder").find(fw).trigger("prev.owl.carousel");
    });
    var sw = $(".slideshow-wrap");
    sw.owlCarousel({
        items: 1,
        nav: false,
        animateOut: "fadeOut",
        autoplay: true,
        autoplayTimeout: 5000,
		 loop:true,
    });
	// twitter ------------------
    $("#twitter-feed").tweet({
        username: "katokli3mmm",
        join_text: "auto",
        avatar_size: 0,
        count: 4
    });
    $("#twitter-feed").find("ul").addClass("twitter-slider");
    $("#twitter-feed").find("ul li").addClass("item");
    var ts = $(".twitter-slider");
    ts.owlCarousel({
        items: 1,
        nav: false
    });
    $(".twitter-holder .next-slide").on("click", function() {
        ts.trigger("next.owl.carousel");
    });
    $(".twitter-holder .prev-slide").on("click", function() {
        ts.trigger("prev.owl.carousel");
    });
	// other functions ------------------
    $(".fixed-wrap , .scroll-nav-holder").scrollToFixed({
        minWidth: 1036
    });
	// scroll animation ------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) $("footer").addClass("visfooter"); else $("footer").removeClass("visfooter");
    });
    $(".nav-inner nav li").on("mouseenter", function() {
        $(this).find("ul").stop().slideDown();
        $(".nav-inner").addClass("menhov");
    });
    $(".nav-inner nav li").on("mouseleave", function() {
        $(this).find("ul").stop().slideUp();
        $(".nav-inner").removeClass("menhov");
    });
    $(".subnav a.custom-scroll-link").on("click", function() {
        var a = $(window).width();
        if (a < 1036) setTimeout(function() {
            hidemenu();
        }, 450);
    });
    var i = 1;
    $(document.body).on("appear", ".stats", function(a) {
        if (1 === i) k(2600);
        i++;
    });
    function j(a, b, c, d) {
        if (d) {
            var e = 0;
            var f = parseInt(d / a);
            var g = setInterval(function() {
                if (e - 1 < a) c.html(e); else {
                    c.html(b);
                    clearInterval(g);
                }
                e++;
            }, f);
        } else c.html(b);
    }
    function k(a) {
        $(".stats .num").each(function() {
            var b = $(this);
            var c = b.attr("data-num");
            var d = b.attr("data-content");
            j(c, d, b, a);
        });
    }
    $(".animaper").appear();
    $(document.body).on("appear", ".piechart-holder", function() {
        $(this).find(".chart").each(function() {
            var a = $(".piechart-holder").data("skcolor");
            $(".chart").easyPieChart({
                barColor: a,
                trackColor: "#eee",
                scaleColor: "#9ACFB7",
                size: "150",
                lineWidth: "5",
                onStep: function(a, b, c) {
                    $(this.el).find(".percent").text(Math.round(c));
                }
            });
        });
    });
    $(document.body).on("appear", ".skillbar-box", function() {
        $(this).find("div.skillbar-bg").each(function() {
            $(this).find(".custom-skillbar").delay(600).animate({
                width: $(this).attr("data-percent")
            }, 1500);
        });
    });
    var l = $(".background-video").data("vid");
    var m = $(".background-video").data("mv");
    $(".background-video").YTPlayer({
        fitToBackground: true,
        videoId: l,
        pauseOnScroll: false,
        mute: m,
        callback: function() {
            var a = $(".background-video").data("ytPlayer").player;
        }
    });
    var bgi2 = $(".fbgs").data("bgscr");
    var bgt2 = $(".fbgs").data("bgtex");
    $(".bg-scroll").css("background-image", "url(" + bgi2 + ")");
    $(".bg-title span").html(bgt2);
    $(".scroll-nav  ul").singlePageNav({
        filter: ":not(.external)",
        updateHash: false,
        offset: 70,
        threshold: 120,
        speed: 1200,
        currentClass: "act-link",
        onComplete: function() {
            if ($(".scroll-nav  a").hasClass("act-link")) $(".scroll-nav  a.act-link").each(function() {
                var a = $(this).data("bgscr"),
                b = $(this).data("bgtex");
                $(".bg-scroll").css("background-image", "url(" + a + ")");
                $(".bg-title span").html(b);
            });
        }
    });
	// isotope ------------------
    function n() {
        if ($(".gallery-items").length) {
            var a = $(".gallery-items").isotope({
                singleMode: true,
                columnWidth: ".grid-sizer, .grid-sizer-second, .grid-sizer-three",
                itemSelector: ".gallery-item, .gallery-item-second, .gallery-item-three"
            });
            a.imagesLoaded(function() {
                a.isotope("layout");
            });
            $(".gallery-filters").on("click", "a.gallery-filter", function(b) {
                b.preventDefault();
                var c = $(this).attr("data-filter");
                a.isotope({
                    filter: c
                });
                $(".gallery-filters a.gallery-filter").removeClass("gallery-filter-active");
                $(this).addClass("gallery-filter-active");
                return false;
            });
        }
    }
    n();
    $(".to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    $(".custom-scroll-link").on("click", function() {
        var a = 70;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1200,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }
    });
	// accordion ------------------
    $(".accordion").each(function() {
        var a = 2 * $(this).attr("data-name");
        $(this).find(".accordion-inner:nth-child(" + a + ")").show();
        $(this).find(".accordion-inner:nth-child(" + a + ")").prev().addClass("activeac");
    });
    $(".accordion .accordion-title").click(function() {
        if ($(this).next().is(":hidden")) {
            $(this).parent().find(".accordion-title").removeClass("activeac").next().slideUp(500);
            $(this).toggleClass("activeac").next().slideDown(500);
        }
        return false;
    });
    var shs = eval($(".share-container").attr("data-share"));
    $(".share-container").share({
        networks: shs
    });
	// contact form ------------------
    $("#contactform").submit(function() {
        var a = $(this).attr("action");
        $("#message").slideUp(750, function() {
            $("#message").hide();
            $("#submit").attr("disabled", "disabled");
            $.post(a, {
                name: $("#name").val(),
                email: $("#email").val(),
                comments: $("#comments").val()
            }, function(a) {
                document.getElementById("message").innerHTML = a;
                $("#message").slideDown("slow");
                $("#submit").removeAttr("disabled");
                if (null != a.match("success")) $("#contactform").slideDown("slow");
            });
        });
        return false;
    });
    $("#contactform input, #contactform textarea").keyup(function() {
        $("#message").slideUp(1500);
    });
    var cm = $(".nav-button");
    var nh = $(".nav-inner");
    function showmenu() {
        setTimeout(function() {
            nh.addClass("vismen");
        }, 120);
        cm.addClass("cmenu");
        nh.removeClass("isDown");
    }
    function hidemenu() {
        nh.addClass("isDown");
        cm.removeClass("cmenu");
        nh.removeClass("vismen");
    }
    cm.on("click", function() {
        if (nh.hasClass("isDown")) showmenu(); else hidemenu();
    });
    $(".sect-subtitle span").fitText(3.2, {
        minFontSize: "120px",
        maxFontSize: "140px"
    });
	// content show ------------------
function contanimshow() {
    $(".content-holder").removeClass("scale-bg2");
	$(".in-anim").animate({opacity: 1},900);
    setTimeout(function() {
        $(".grid-item-holder").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1
                }, 500);
            }, 180 * a);
        });
    }, 450);
    setTimeout(function() {
        $(".viselem").each(function(a) {
            var b = $(this);
            setTimeout(function() {
                b.animate({
                    opacity: 1
                }, 900);
            }, 480 * a);
        });
    }, 250);
}

}
	// if mobile - remove  parallax  and video background ------------------
function initparallax() {
    var a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
        }
    };
    trueMobile = a.any();
    if (null == trueMobile) {
        var b = $(".content");
        b.find("[data-top-bottom]").length > 0 && b.waitForImages(function() {
            s = skrollr.init();
            s.destroy();
            skrollr.init({
                forceHeight: !1,
                easing: "outCubic",
                mobileCheck: function() {
                    return !1;
                }
            });
        });
    }
    if (trueMobile) {
		$(".background-video").remove();
		$('.grid-item-holder').attr("onclick","return true");
	}
}
$(document).ready(function() {
    initBionick();
    initparallax();
});