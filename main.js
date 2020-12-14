Webcam.set({
    width : 310,
    height: 300,
    image_format : 'png',
    png_quality :  90,

    constraints: {
        facing_mode : "environment"
    }

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_img" src="' + data_uri + '"/>';
    });
} 
console.log('ml5 version: ',ml5.version);

Classifier = ml5.imageClassifier('Mobilenet',modelLoaded);

function modelLoaded() {
    console.log('model Loaded!')
}

function check() {
    image = document.getElementById('captured_img');
    Classifier.classify(image,gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object_name").innerHTML = results[0].label;
    }
}