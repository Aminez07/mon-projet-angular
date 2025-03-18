 import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
 import { provideHttpClient } from '@angular/common/http'; // ✅ Ajout de provideHttpClient

 bootstrapApplication(AppComponent, {
   ...appConfig,
   providers: [provideHttpClient(), ...appConfig.providers], // ✅ Correction
 })
   .catch((err) => console.error(err));
