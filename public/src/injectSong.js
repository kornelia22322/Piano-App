export function injectSong(song) {
    let len = song.length;
    let singleWidth = (100/len).toFixed(5);
    let template = '';
    singleWidth += "%";
    for(let i in song) {
        template += '<div class = "single-letter"><p>' + song[i] + '</p></div>';
    }
    $(".spans#black").append(template);
    //$(".single-letter").css({"width" : singleWidth, "height" : "100%", "position" : "absolute"});
}
