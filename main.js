var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML="";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcipt;
    document.getElementById("textbox").innerHTML = Content;
    Console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis
    speak_data = "taking your selfie in 5 seconds";
    var utterthis = new speechSynthesis(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {
    webcam.snap(function (data_url) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_url + '">'
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}