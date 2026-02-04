import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DEVICES } from './device.mock';


@Injectable()
export class DeviceService {
    

    /**
     * All Devices
     */
    public all() {
        return of(DEVICES);
    }
    

    /**
     * Get Device
     */
    public get(
        id: string
    ) {
        return of(DEVICES.find((d) => d.id === id))
    }
}
