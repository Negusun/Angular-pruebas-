import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { PruebaModule } from './app/prueba/prueba.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(PruebaModule);
