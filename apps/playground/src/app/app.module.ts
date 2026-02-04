import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NotFoundComponent } from './not-found';
import { provideRouter, RouterModule, withRouterConfig } from '@angular/router';
import { DashComponent } from './dash';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';


@NgModule({
    declarations: [
        AppComponent,
        DashComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        RouterModule
    ],
    providers: [
        provideStore({}, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        provideEffects([]),
        provideStoreDevtools({
            maxAge: 100,
            autoPause: true,
            name: 'stratix-playground'
        }),
        provideRouter(
            appRoutes, 
            withRouterConfig({
                onSameUrlNavigation: 'ignore'
            })
        )
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
