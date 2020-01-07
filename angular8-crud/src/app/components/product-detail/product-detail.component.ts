import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = { _id: '', prod_name: '', prod_desc: '', prod_price: null, updated_at: null };
  isLoadingResults = true;

  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }

  //function for getting Product data from the API
  //Call this function when the component is initiated.
  getProductDetails(id: any){
    this.api.getProduct(id).subscribe(
      (data:any) => {
        this.product = data;
        console.log(this.product);
       this.isLoadingResults = false;
      });
  }

  deleteProduct(id: any) {
    this.isLoadingResults = true;
    this.api.deleteProduct(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/products']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
