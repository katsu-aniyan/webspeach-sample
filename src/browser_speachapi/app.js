var recognition = new webkitSpeechRecognition();
var elmStart = document.getElementById('recognitionStart');
var elmEnd = document.getElementById('recognitionEnd');
var elmResult = document.getElementById('recognitionResult');

recognition.lang = 'ja';
recognition.continuous = true;

recognition.addEventListener('result', function (event) {
	var text = '';

	for (var i = 0; i < event.results.length; i++) {
		text += event.results[i][0].transcript;
	}

	elmResult.value = text;
}, false);

elmStart.addEventListener('click', function () {
	elmResult.value = '';
	recognition.start();
}, false);

elmEnd.addEventListener('click', function () {
	recognition.stop();
}, false);
