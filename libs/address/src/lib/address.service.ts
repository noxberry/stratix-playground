import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ADDRESSES } from './address.mock';


@Injectable()
export class AddressService {
    

    /**
     * All Addresses
     */
    public all() {
        return of(ADDRESSES);
    }
    

    /**
     * Get Address
     */
    public get(
        id: string
    ) {
        return of(ADDRESSES.find((a) => a.id === id))
    }
}
