import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found';
import { DashComponent } from './dash';


export const appRoutes: Routes = [
    {
        path: '',
        component: DashComponent
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
