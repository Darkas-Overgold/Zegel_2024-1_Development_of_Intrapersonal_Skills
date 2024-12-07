function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}
// Manejo de eventos de teclado
document.addEventListener("keydown", (event) => {
    switch (event.key.toLowerCase()) {
        case "d":
            playSound("src/drumroll.mp3");
            break;
        case "m":
            playSound("src/micdrop.mp3");
            break;
    }
});
