import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/products.model';
@Component({
  selector: 'app-products-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css'
})
export class ProductsDetailComponent implements OnInit{
  public product ?: IProduct
  private _routerActive = inject(ActivatedRoute)
  private _apiService = inject(ApiService)
  ngOnInit(): void {
    this._routerActive.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe({
        next: (data)=>{
          console.log(data)
          this.product = data
          this.isLoading = false
        },
        error: (err)=>{
          console.log(err)
        }
      })
    })
  }
  isLoading: boolean = true
  
}
