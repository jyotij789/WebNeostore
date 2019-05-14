import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../services/api-auth.service'
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    product_categories: any;
    baseUrl: string;
    constructor(private apiService: ApiAuthService) { }

    ngOnInit() {
        this.baseUrl = this.apiService.baseApiUrl;

        this.getInitialData();
    }

    private getInitialData() {
        let params = {}
        let url = '/getAllProductsImages';
        this.apiService.get(params, url).subscribe((response) => {
            console.log("Initial response", response)
            if (response.success == true && response.hasOwnProperty('category_details')) {
                this.product_categories = response.category_details;
                console.log("this.product_categories", this.product_categories);
            }

        },
            (error) => {
                console.log("Error", error)
            })
    }


}
export interface Category {
    _id: number;
    category_name: string;
    product_image: string;
    created_at?: string;
    __v?: number;
}