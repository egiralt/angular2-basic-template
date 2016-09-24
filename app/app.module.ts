import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import{ AppComponent } from './components/app.component';
import { AppRoutes } from './routes/app.routes';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        //RouterModule.forRoot(AppRoutes),
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent
	// Pipes & services
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
