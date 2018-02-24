export const context = new AudioContext();

export function getData(URL, context) {
    window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
        play(audioBuffer, context);
    });
}

function play(audioBuffer, context) {
    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start();
}
