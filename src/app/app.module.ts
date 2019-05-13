import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

//importing Fontawesome 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductModule } from './product/product.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderBarComponent,
        FooterBarComponent,
        UserComponent,
        HomeComponent,

    ],
    imports: [
        BrowserModule,
        ProductModule,
        AngularFontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
