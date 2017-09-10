import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppMaterialModule } from './app.module.material';

import { ThemeService } from './services/theme.service';

import { AppComponent } from './app.component';
import { HostedSnippetComponent } from './components/hosted-snippet/hosted-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    HostedSnippetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppMaterialModule
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
