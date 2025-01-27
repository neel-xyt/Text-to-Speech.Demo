function speak() {
    var text = document.getElementById('text').value;
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.rate = 1;  // Adjust rate if needed
    speech.pitch = 1; // Adjust pitch if needed
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
}
