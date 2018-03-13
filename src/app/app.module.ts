import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//  Components
import { AppComponent } from './app.component';

//  Services
import { StoreService } from './services/store.service';

//  Forms
import { FormsModule } from '@angular/forms';

@NgModule(
  {
  declarations: 
  [
    AppComponent
  ],
  imports: 
  [
    BrowserModule,

    //  Forms
    FormsModule
  ],
  providers: 
  [
    //  Services
    StoreService
  ],
  bootstrap: 
  [
    AppComponent
  ]
})
export class AppModule 
{ 

}
