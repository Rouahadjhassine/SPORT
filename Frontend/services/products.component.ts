import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('Produits reçus depuis l’API:', data); // 🔥 Vérifie la console du navigateur
        this.products = data;
      },
      (error) => {
        console.error('Erreur de connexion à l’API:', error);
      }
    );
  }
}
