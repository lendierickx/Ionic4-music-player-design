import {Component, ElementRef, OnDestroy, OnInit, ViewChild, HostListener} from '@angular/core';
import {ConfigService} from '../config.service';
import {NavController} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {AudioService} from '../audio.service';

import { interval } from 'rxjs';

// declare var window.Lights: any;

declare global {
    interface Window { Lights: any; }
}

window.Lights = window.Lights || {};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
    private allowedStations = ['Classic', 'Party', 'Folk', 'Romantic'];
    public stations = {};
    private stationsSubscription;

    public musicLength;
    public currentTime;
    public secondFormat;
    public time;

    public bufDataArray;

    observableVar = interval(1000);

    musicKind: any = [];

    // @ViewChild('audioOption') audioPlayerRef: ElementRef;

    @ViewChild('spectrum_canvas') canvasEl : ElementRef;
    @ViewChild('pink_circle') pinkCircleEl : ElementRef;

    /**
     * Reference Canvas object
     */
    private _CANVAS  : any;

    /**
    * Reference the context for the Canvas element
    */
    private _CONTEXT : any;


    public isPlaying = false;

    public selectedStation = '';
    private lights = null;

    public constructor (private configService: ConfigService, 
        private navCtrl: NavController, 
        private socialSharing: SocialSharing,
        private audioService: AudioService) {
    }

    ngOnInit() {
        this.musicKind = [];
        this.stationsSubscription = this.configService.getStations().subscribe(stations => {
            stations.forEach(station => {
                // if (this.allowedStations.indexOf(station.id) > -1) {
                    this.stations[station.id] = station;
                    this.musicKind.push(station.id);
                // }
            });
            setTimeout(this.inintializeDefault.bind(this), 1000);
        });
    }

    ngOnDestroy() {
        this.stationsSubscription.unsubscribe();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event){
       this._CONTEXT.canvas.width  = window.innerWidth;
       this._CONTEXT.canvas.height = window.innerHeight;
    }

    play () {
        

        // if (!this.lights) {
        //     this.lights = new window.Lights();
        // }
        
        if (!this.selectedStation) {
            return;
        }
        this.isPlaying = true;
        this.audioService.play();

        const subscription = this.observableVar.subscribe(() => {

           this.currentTime = this.audioService.getCurrentTime();
           this.time = this.audioService.getCurrentTime();

           const second = Math.round(this.time);
           const min = Math.floor(second / 60);
           const second1 = second % 60;
           const timeFormat = min + ':' + (second1 > 9 ? second1 : '0' + second1);
           this.secondFormat = timeFormat;
        });
    }

    pause () {
        this.isPlaying = false;
        this.audioService.pause();
    }

    getControlClass (name) {
        if (name === this.selectedStation) {
            return 'station ' + name + ' active';
        } else {
            return 'station ' + name;
        }
    }

    lightsClass() {
        return 'lights ' + this.isPlaying ? 'playing' : '';
    }

    inintializeDefault() {
        this.choose(this.musicKind[0]);
        this.ionViewDidLoad();
    }

    choose(name) {
        this.pause();
        this.selectedStation = name;

        this.audioService.setAudioSource(this.stations[name].url);

        console.log("this.stations[name].url:",this.stations[name].url);
        this.audioService.load();
    }

    gotoAbout() {
        this.navCtrl.navigateRoot('about');
    }

    share() {
        const msg = 'Aiza Radio !\n' +
            '\n' +
            'Tune In now to Aiza Radio. App to suit your mood.\n' +
            '\n' +
            'Download Now\n' +
            'www.aiza.pk\n' +
            'Let the music talk.';
        this.socialSharing.share(msg, null, null, null);
    }

    getMusicClassName (name) {
        if (name === this.selectedStation) {
            return 'music ' + name + ' active';
        } else {
            return 'music ' + name;
        }
    }

    ////// Canvas operation
    ionViewDidLoad()
    {
        this._CANVAS 	    = this.canvasEl.nativeElement;

        this.initialiseCanvas();
        this.renderFrame();
    }

    initialiseCanvas()
    {
        if(this._CANVAS.getContext)
        {
            this.setupCanvas();
        }
    }
    setupCanvas()
    {
       this._CONTEXT = this._CANVAS.getContext('2d');
       this._CONTEXT.fillStyle = "#3e3e3e";

       this._CONTEXT.canvas.width  = window.innerWidth;
       this._CONTEXT.canvas.height = window.innerHeight;
    }

    clearCanvas()
    {
        this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
        this.setupCanvas();
    }


    ////////
    renderFrame() {
        this.audioService.getByteFrequencyDataArray();
  
        this.drawBars(this.audioService.getDataArray());
        requestAnimationFrame(this.renderFrame.bind(this));   
    }

    ////////
    drawBars (array) {

	//just show bins with a value over the treshold
	var threshold = 0;
	// clear the current state
	this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);

	//the max count of bins for the visualization
	var maxBinCount = array.length;
	//space between bins
	var space = 3;
	this._CONTEXT.save();
	this._CONTEXT.globalCompositeOperation='source-over';
    
    this._CONTEXT.translate(this.pinkCircleEl.nativeElement.offsetLeft + this.pinkCircleEl.nativeElement.offsetHeight / 2, 
        this.pinkCircleEl.nativeElement.offsetTop + this.pinkCircleEl.nativeElement.offsetWidth / 2);

	this._CONTEXT.fillStyle = "#fff";

	var bass = Math.floor(array[1]); //1Hz Frequenz 

	var radius = 0.45 * window.innerWidth <= 450 ? -(bass * 0.05 + 0.3 * window.innerWidth) : -(bass * 0.05 + 450);

	var bar_length_factor = 1;
	if (window.innerWidth >= 785) {
		bar_length_factor = 10.0;
	}
	else if (window.innerWidth < 785) {
		bar_length_factor = 1.5;
	}
	else if (window.innerWidth < 500) {
		bar_length_factor = 20.0;
    }
    
	//go over each bin
	for ( var i = 0; i < maxBinCount; i++ ){
		
		var value = array[i];
		// value -= 100;
		if (value >= threshold) {

            // this._CONTEXT.fillRect(0, radius, window.innerWidth <= 450 ? 2 : 10, -value * value / 100 / bar_length_factor * 10);
            this.polygon(this._CONTEXT, 0, radius, 8, -value * value / bar_length_factor / 700);
            this._CONTEXT.rotate(180/30 * Math.PI/180);
		}
	}  
    
	this._CONTEXT.restore();
      }

    polygon(ctx, x, y, width, height) {
        ctx.fillStyle="#fff";
        ctx.strokeStyle="#fff";
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x+width/2,y+width/2);
        ctx.lineTo(x+width,y);
        ctx.lineTo(x+width,y+height);
        ctx.lineTo(x+width/2,y+height-width/2);
        ctx.lineTo(x,y+height);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}
