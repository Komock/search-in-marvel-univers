import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { MasonryModule } from 'angular2-masonry';

import { HeroesService } from './heroes.service';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MasonryModule
  ],
  providers: [HttpService, HeroesService, BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
