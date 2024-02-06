import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/products.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  productsList: IProduct[]  = []
  isLoading: boolean = true
  private _apiService = inject(ApiService)
  private _router = inject(Router)
  ngOnInit(): void {
      this._apiService.getAllProducts().subscribe({
        next: (data: IProduct[])=>{
          this.productsList = data
          this.isLoading = false
        },
        error: (err)=>{
          console.log("Hubo un error en la solicitud: " + err)
        }
      })
  }
  navegate(id: number) {
    this._router.navigate(['/products', id])
  }
}
