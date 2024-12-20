import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticlesComponent } from './articles/articles.component'; 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ArticlesComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
