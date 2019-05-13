import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        ProductSearchComponent
    ],
    declarations: [ProductSearchComponent]
})
export class ProductModule { }
