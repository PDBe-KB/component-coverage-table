import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoverageTableComponent } from './coverage-table/coverage-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverageTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
