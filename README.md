# Text-to-Speech Demo

This **Text-to-Speech** feature uses the **Web Speech API**, a browser-based API that allows web applications to convert text into speech.

## How It Works

The **Text-to-Speech** feature in this demo is powered by the **SpeechSynthesis API**, which is part of the Web Speech API. The user can input text into a textbox, and by clicking the "Speak" button, the entered text will be converted into speech.

### HTML Layout

The layout consists of:
- A `textarea` where users can enter text.
- A button with a microphone icon that triggers the speech synthesis function.

### JavaScript (SpeechSynthesis API)

The JavaScript function `speak()` is responsible for converting the text into speech. It retrieves the value from the text box, creates a speech object, and sets parameters like speech rate, pitch, and volume. The text is then read aloud using the `window.speechSynthesis.speak()` method.

### Code Example:
```javascript
function speak() {
    var text = document.getElementById('text').value;
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.rate = 1;  // Adjust speech rate
    speech.pitch = 1; // Adjust pitch
    speech.volume = 1; // Adjust volume
    window.speechSynthesis.speak(speech);
}
