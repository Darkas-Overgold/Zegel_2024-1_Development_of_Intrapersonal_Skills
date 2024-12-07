function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}
// Manejo de eventos de teclado
document.addEventListener("keydown", (event) => {
    switch (event.key.toLowerCase()) {
        case "d":
            playSound("drumroll.mp3");
            break;
        case "m":
            playSound("micdrop.mp3");
            break;
    }
});
