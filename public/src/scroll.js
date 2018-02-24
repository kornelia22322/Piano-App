export function addScroll() {
    $(".menu-items").click(function(e) {
        e.preventDefault();
        let elem = e.target.href;
        let href = $(this).attr("href").split("#");
        let hrefSplit = href[1];
        let offsetTop = $("#" + hrefSplit).offset().top;
        if("#"+hrefSplit == "#songs-outer-scrollto") {
            $("#songs-outer").addClass('transition');
        }
        $('html, body').animate({
            scrollTop: offsetTop
        }, 500);
    })
}
