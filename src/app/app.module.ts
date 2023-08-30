import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PrenavComponent } from '../prenav/prenav.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, PrenavComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
