const startRecognition = ()=>{
    
    const recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ) ();

    recognition.lang = 'es-US';

    recognition.onend = (event)=>{
        recognition.start();
    }

    recognition.onresult = (result)=>{
        readSpeech(result);
    }

    recognition.start();
}

const readSpeech = (speech)=>{    
    const transcription = speech.results[0][0].transcript;

    const transcriptionBox = document.getElementById('transcription');
    transcriptionBox.innerHTML = `<span>${transcription}</span>`;

    if(transcription.includes('fondo') && transcription.includes('rojo')) {
        document.body.style.backgroundColor = 'red';
        document.body.classList.remove('white');
    }else if(transcription.includes('fondo') && transcription.includes('azul')){
        document.body.style.backgroundColor = 'blue';
        document.body.classList.remove('white');
    }else if(transcription.includes('fondo') && transcription.includes('verde')){
        document.body.style.backgroundColor = 'green';
        document.body.classList.remove('white');
    }else if(transcription.includes('fondo') && transcription.includes('negro')){
        document.body.style.backgroundColor = 'black';
        document.body.classList.add('white');
    }
}

const navigatorAllow = () =>{
    if(
        navigator.userAgent.indexOf('Chrome') ||
        navigator.userAgent.indexOf('Edge') ||
        navigator.userAgent.indexOf('Safari')        
    ){
        return true;
    }

    alert('El navegador no es compatible');
    return false;
}
if(navigatorAllow()){
    const startRecognitionBtn = document.getElementById('startRecognition');
    startRecognitionBtn.addEventListener('click', startRecognition);    
}