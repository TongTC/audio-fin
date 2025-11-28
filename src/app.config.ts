import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { routes } from "./app/app.route";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export const appConfig:ApplicationConfig={
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' })
      
    ),
    provideHttpClient(), provideAnimationsAsync('noop'), provideAnimationsAsync(), provideAnimationsAsync(),
  ],
}