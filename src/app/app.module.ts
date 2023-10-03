import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastModule } from './toast/toast.module';
import { WavesComponent } from './waves/waves.component';
import { ToastService } from './toast/toast.service';
import { of } from 'rxjs';

@NgModule({
  declarations: [AppComponent, WavesComponent],
  imports: [BrowserModule, ToastModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
