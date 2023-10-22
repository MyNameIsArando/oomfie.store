var button = document.getElementById('bgvid');
    document.getElementById('mute').onclick = function (){

    if (video.muted === false) {    
       video.muted = true;
    }

    else {
        video.muted = false;
    }

    };
    document.getElementById('bgvid').volume = 0.05; /* Music Volume */