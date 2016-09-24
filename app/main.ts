import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';

const platform = platformBrowserDynamic();

//enableProdMode(); //Used only to change to production mode
platform.bootstrapModule(AppModule);
