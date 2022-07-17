$(".contact-button a").click(function() {
        var e = $(".contact-sec");
        if (e.is(":hidden")) {
            e.fadeIn(300);
            e.addClass("contact-show");
            $("#outer-wrapper").addClass("pop_contact ")
        }
        return false
    });
    $(document).bind("click", function(e) {
        if ($(e.target).parents(".contact-sec").length === 0) {
            $(".contact-sec").fadeOut(300);
            $("#outer-wrapper").removeClass("pop_contact ");
            $(".contact-sec").removeClass("contact-show")
        }
    });
    $(".contact-close").click(function() {
        $(".contact-sec").fadeOut(300);
        $("#outer-wrapper").removeClass("pop_contact ");
        $(".contact-sec").removeClass("contact-show");
        return false
    });
