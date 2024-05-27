import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { ModalModule } from "ngx-bootstrap/modal";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
     provideHttpClient(),
     provideAnimations(), 
     provideToastr(), 
     importProvidersFrom(
      ModalModule.forRoot()
        )
  ]
};
