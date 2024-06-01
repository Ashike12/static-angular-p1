import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuItemsComponent } from 'src/app/components/menu-items/menu-items.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { DashboardDefaultComponent } from 'src/app/components/dashboard-default/dashboard-default.component';
import { ContactUsComponent } from 'src/app/components/contact-us/contact-us.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,MenuItemsComponent,AboutUsComponent,DashboardDefaultComponent,ContactUsComponent,FooterComponent, HomeComponent, CareerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
