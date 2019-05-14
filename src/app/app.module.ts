import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//importing components
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './home/header-bar/header-bar.component';
import { FooterBarComponent } from './home/footer-bar/footer-bar.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileDropdownComponent } from './home/profile-dropdown/profile-dropdown.component';

//importing Fontawesome 
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ProductModule } from './product/product.module';

//importing service
import { ApiAuthService } from './services/api-auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderBarComponent,
        FooterBarComponent,
        UserComponent,
        HomeComponent,
        ProfileDropdownComponent,

    ],
    imports: [
        BrowserModule,
        ProductModule,
        HttpClientModule,
        AngularFontAwesomeModule
    ],
    providers: [ApiAuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }
