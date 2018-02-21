export const context = new AudioContext();

export function addClickEvents(piano){
    for(let i in piano.keyArray){
        if(piano.keyArray[i]!=undefined) {
            $(piano.keyArray[i].stringPattern).on("click", function() {
                console.log(piano.keyArray[i]);
                getData(piano.keyArray[i].URL, context);
            });
        }
    }
}

export function getData(URL, context) {
    window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
        let yodelBuffer = audioBuffer;
        play(yodelBuffer, context);
    });
}

function play(audioBuffer, context) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
}
