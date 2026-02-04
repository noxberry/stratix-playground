import { Component, input } from '@angular/core';
import { BusyConstants } from './busy.constants';


@Component({
    selector: 'ui-busy',
    templateUrl: './busy.component.html',
    styleUrls: ['./busy.component.scss'],
    standalone: true
})
export class BusyComponent {
    public readonly constants = BusyConstants;
    public readonly animation = input<string>(BusyConstants.ANIMATION_DOTS);
}
