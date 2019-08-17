import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { Device } from '@ionic-native/device';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PushServiceService {

  // _devicepath: FirebaseListObservable<any>;
  uuid: string;

  // push: Push;

  constructor(
    // private push: Push,
    // private device: Device,
    private afdb: AngularFireDatabase
  ) {
    this._getdevice();
  }

  _getdevice() {
    this.uuid = Device.uuid;
    // console.log('Device UUID is: ' + this.device.uuid);
    // this._devicepath = this.afdb.list(`devices/${this.uuid}`);
  }

   pushInt() {
    // to check if we have permission
    Push.hasPermission()
      .then((res: any) => {

        if (res.isEnabled) {
          console.log('We have permission to send push notifications');
        } else {
          console.log('We do not have permission to send push notifications');
        }

      });

    // to initialize push notifications

    const options: PushOptions = {
      android: {
        senderID: environment.firebase.messagingSenderId,
        clearBadge: true,
        icon: 'ic_notification'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = Push.init(options);

    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration')
    .subscribe((registration: any) => {
      console.log('Device registered', registration);
      this.savePushToken(registration.registrationId);
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

  }

  private savePushToken(token) {
    const payload = {
      token: token
    };
    console.log( this.uuid, payload );
    // this._devicepath.update('meta', payload);
  }
}
