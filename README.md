# Text-to-Speech-Demo
This "[Text to Speech](https://neel-xyt.github.io/Text-to_Speech-Demo/)" demo uses the Web Speech API, a browser feature that allows web applications to convert text into speech.

## HTML Layout:
The page has a text box where the user can input text, and a button with a microphone icon to trigger speech.

## JavaScript (SpeechSynthesis API):
The ```speak()``` function retrieves the text from the textarea and uses ```SpeechSynthesisUtterance()``` to create a speech object. It sets parameters like rate, pitch, and volume, and then calls window.```speechSynthesis.speak()``` to read the text aloud.

## Browser Support: 
This works in modern browsers like ```Chrome```, ```Edge```, and ```Firefox```, but not all browsers support the Web Speech API. Most mobile browsers also support it, though compatibility might vary slightly

### URL:👇
```
https://neel-xyt.github.io/Text-to_Speech-Demo/
```
