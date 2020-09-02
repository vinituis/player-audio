window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".card-content .artist"),
    audio: document.querySelector("audio"),
    audioData: audios,
    currentAudio: {},
    start() {
        this.currentAudio = this.audioData[0];

        this.cover.style.background = `url('${pathImage(this.currentAudio.cover)}') no-repeat center center / cover`;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerText = this.currentAudio.artist;
        this.audio.src = pathAudio(this.currentAudio.file);
        
        this.audio.addEventListener('ended', () => {
            this.audio.src = pathAudio(this.audioData[1].file);
            this.audio.play();
        })
    }
  };