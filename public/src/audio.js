let yodelBuffer;

export function addClickEvents(piano){
    let context = new AudioContext();
    for(let i = 0; i < piano.keyArray.length; i++){
        $("#" + piano.keyArray[i].stringPattern).on("click", function() {
            getData(piano.keyArray[i].URL, context);
        });
    }
}

  function getData(URL, context) {
    window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
        yodelBuffer = audioBuffer;
        play(yodelBuffer, context);
    });
}

function play(audioBuffer, context) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
}
