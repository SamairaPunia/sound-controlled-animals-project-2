
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Z2vPw3ZVu/model.json', modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}