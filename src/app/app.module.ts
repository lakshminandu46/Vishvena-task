import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ExpertiseComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
