import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {Station} from './station';
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";


@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    private configCollection: AngularFirestoreCollection<Station[]>;

    private stations$;

    constructor(db: AngularFirestore) {
        this.configCollection = db.collection<Station[]>('stations');
        this.stations$ = this.configCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return {id, ...data}
                })
            })
        )
    }

    public getStations(): Observable<Station[]> {
        return this.stations$
    }
}
