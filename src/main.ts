import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module'; // предполагая, что у вас есть файл app.module.ts

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err));
