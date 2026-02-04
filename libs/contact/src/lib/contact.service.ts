import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CONTACTS } from './contact.mock';


@Injectable()
export class ContactService {
    

    /**
     * All Contacts
     */
    public all() {
        return of(CONTACTS);
    }
    

    /**
     * Get Contact
     */
    public get(
        id: string
    ) {
        return of(CONTACTS.find((c) => c.id === id))
    }
}
