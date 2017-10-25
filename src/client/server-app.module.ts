import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HomeComponent } from './home/home.component';
import { ClientAppModule } from './client-app.module';
import 'zone.js';

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