class Particle {
    constructor(index, parent) {
        this.index = index;
        this.parent = parent;
        this.minSize = 5;
        this.init();
    }
    init() {
        this.freqVal = this.parent.freqData[this.index] * 0.01;
        this.size =
            this.freqVal *
            ((this.parent.dimensions.x + this.parent.dimensions.y) * 0.5) *
            0.0125 +
            this.minSize;
        this.position = new Vector2(
            Math.random() * this.parent.dimensions.x,
            this.parent.dimensions.y + this.size + Math.random() * 50
        );
        this.velocity = new Vector2(2 - Math.random() * 4, 0);
    }
    update() {
        this.freqVal = this.parent.freqData[this.index] * 0.01;

        this.size = this.freqVal * 20 + this.minSize;

        this.hue =
            this.index / this.parent.analyser.frequencyBinCount * 360 + 120 + this.parent.tick / 6;
        this.saturation = this.freqVal * 50;
        this.alpha = this.freqVal * 0.3;

        this.fill = `hsla(${this.hue}, ${this.saturation}%, 50%, ${this.alpha})`;
        this.lift = Math.pow(this.freqVal, 3);

        this.position.subY(this.lift + 0.5);
        this.position.add(this.velocity);

        this.checkBounds();
    }
    checkBounds() {
        if (
            this.position.y < -this.size ||
            this.position.x < -this.parent.dimensions.x * 0.15 ||
            this.position.x > this.parent.dimensions.x * 1.15
        ) {
            this.init();
        }
    }
}

class App {
    constructor() {
        this.globalMovement = new Vector2();
        this.initCanvas();
        this.initUI();
        this.initAudio();
        this.audioCtx.resume();
        this.loadAudio();
        this.populate();
        this.render();
        window.onresize = () => {
            this.resize();
        };
    }
    initCanvas() {
        this.tick = 0;
        this.dark = false;
        this.wave = true;
        // this.canvas = document.getElementById("canvas");
        // this.ctx = this.canvas.getContext("2d");
        // this.glowLayer = document.getElementById("glow-layer");
        // this.glowCtx = this.glowLayer.getContext("2d");
        this.dimensions = {};
        this.resize();
    }
    resize() {
        // this.canvas.width = this.glowLayer.width = this.dimensions.x = document.body.getBoundingClientRect().width;
        // this.canvas.height = this.glowLayer.height = this.dimensions.y = document.body.getBoundingClientRect().height;
    }
    initUI() {
        this.controls = {
            prev: document.querySelector("#btn-prev"),
            next: document.querySelector("#btn-next"),
            play: document.querySelector("#btn-play")
        };
        // this.controls.prev.onclick = () => {
        //     this.currentSong = this.currentSong > 1
        //         ? this.currentSong - 1
        //         : this.fileNames.length;
        //     this.loadAudio();
        // };
        // this.controls.next.onclick = () => {
        //     this.currentSong = this.currentSong < this.fileNames.length
        //         ? this.currentSong + 1
        //         : 1;
        //     this.loadAudio();
        // };
        this.controls.play.onclick = () => {
            let i = this.controls.play.getElementsByTagName("i")[0];
            if (this.playing && this.audioReady) {
                i.classList.remove("fa-pause");
                i.classList.add("fa-play");
                this.playing = false;
                this.audio.pause();
            } else if (!this.playing && this.audioReady) {
                i.classList.remove("fa-play");
                i.classList.add("fa-pause");
                this.playing = true;
                this.audio.play();
            }
        };
    }
    initAudio() {
        this.currentSong = 1;
        this.volume = 1;
        // this.baseURL = "https://res.cloudinary.com/sf-cloudinary/video/upload/v1525440046/";
        this.baseURL = "http://50.7.68.251:7064/stream";
        this.fileNames = [""];

        this.audio = document.getElementById("audio");
        this.audio.addEventListener("ended", () => {
            this.audio.currentTime = 0;
            this.audio.pause();
            this.currentSong = this.currentSong < this.fileNames.length
                ? this.currentSong + 1
                : 1;
            this.loadAudio();
        });

        try {
            this.audioCtx = new AudioContext();
        } catch (e) {
            this.audioCtx = new webkitAudioContext();
        }

        this.source = this.audioCtx.createMediaElementSource(this.audio);
        this.gainNode = this.audioCtx.createGain();

        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.smoothingTimeConstant = 0.92;
        this.analyser.fftSize = 2048;
        this.analyser.minDecibels = -125;
        this.analyser.maxDecibels = -10;

        this.analyser.connect(this.audioCtx.destination);
        this.gainNode.connect(this.analyser);
        this.source.connect(this.gainNode);

        this.gainNode.gain.value = this.volume;

        this.freqData = new Uint8Array(this.analyser.frequencyBinCount);
    }
    loadAudio() {
        this.audioReady = false;
        this.playing = false;
        this.playAudio(this.baseURL + this.fileNames[this.currentSong - 1]);
    }
    playAudio(data) {
        this.audioReady = true;
        this.playing = true;
        this.audio.src = data;
        this.audio.load();
        this.audio.play();
    }
    populate() {
        this.particles = [];
        for (let i = 0; i < 625; i++) {
            this.particles.push(new Particle(i, this));
        }
    }
    update() {
        // this.ctx.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
        // this.ctx.save();
        // this.ctx.globalCompositeOperation = "lighten";
        for (let i = this.particles.length - 1; i >= 0; i--) {
            let particle = this.particles[i];
            if (this.freqData[i] > 0) {
                particle.update();
                if (this.wave) particle.position.add(this.globalMovement);
                //this.ctx.beginPath();
                // this.ctx.beginPath();
                // this.ctx.fillStyle = particle.fill;
                // this.ctx.arc(
                //     particle.position.x,
                //     particle.position.y,
                //     particle.size,
                //     0,
                //     2 * Math.PI
                // );
                // this.ctx.fill();
                // this.ctx.closePath();
            } else {
                particle.update();
                if (this.wave) particle.position.add(this.globalMovement);
                //this.ctx.beginPath();
                // this.ctx.beginPath();
                // this.ctx.fillStyle = particle.fill;
                // this.ctx.arc(
                //     particle.position.x,
                //     particle.position.y,
                //     particle.size,
                //     0,
                //     2 * Math.PI
                // );
                // this.ctx.fill();
                // this.ctx.closePath();
            }
        }
        // this.ctx.restore();
        // this.glowCtx.clearRect(0, 0, this.dimensions.x, this.dimensions.y);
        // this.glowCtx.filter = "blur(8px) saturate(150%) brightness(150%)";
        // this.glowCtx.drawImage(this.canvas, 0, 0);
    }
    render() {
        this.tick++;
        if (this.wave) this.globalMovement.x = Math.sin(this.tick * 0.01) * 2;
        var tmpFreqData = this.freqData || [];
        this.analyser.getByteFrequencyData(this.freqData);
        if (!this.audio.paused) {
            for (var i = 0; i < this.freqData.length; ++i) {
                if (!tmpFreqData[i] && !this.freqData[i]) {
                    this.freqData[i] = Math.random() * 150;
                } else if(!this.freqData[i] && tmpFreqData[i]) {
                    sign = Math.random() * 10;
                    if (sign >= 9) {
                        this.freqData[i] = tmpFreqData[i] + Math.random() * 10;
                    } else if (sign <= 1) {
                        this.freqData[i] = tmpFreqData[i] - Math.random() * 10;
                    } else {
                        this.freqData[i] = tmpFreqData[i]
                    }
                }
            }
        }
        this.update();
        window.requestAnimationFrame(this.render.bind(this));
    }
}

window.requestAnimationFrame = (() => {
    return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        }
    );
})();

window.Lights = App