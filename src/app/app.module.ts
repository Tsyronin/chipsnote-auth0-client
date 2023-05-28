import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SyncsComponent } from './components/syncs/syncs.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { SyncComponent } from './components/sync/sync.component';
import { AddSyncComponent } from './components/add-sync/add-sync.component';
import { AddTodoistSyncDialogComponent } from './components/add-todoist-sync-dialog/add-todoist-sync-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        SyncsComponent,
        SyncComponent,
        AddSyncComponent,
        AddTodoistSyncDialogComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AuthModule.forRoot(environment.auth),
        MatToolbarModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        MatDialogModule,
        MatButtonModule,
        HttpClientModule
    ]
})
export class AppModule { }
