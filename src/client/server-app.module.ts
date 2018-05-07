import 'zone.js';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HomeComponent } from './home/home.component';
import { ClientAppModule } from './client-app.module';

@NgModule({
    bootstrap: [
        HomeComponent,
    ],
    imports: [
        ClientAppModule,
        ServerModule
    ],
})
export class ServerAppModule { }
