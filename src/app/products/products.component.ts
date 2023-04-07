import { ProductsService } from '../_services/products.service';
import { Component } from '@angular/core';
import { IProduct } from '../products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  products: IProduct[] | undefined

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const productsAll = this.productsService.getAll()

    this.route.queryParamMap.subscribe(params => {
      const name = params.get('name')?.toLocaleLowerCase()

      if (name) {
        this.products = productsAll.filter(product => product.name.toLowerCase().includes(name))
        return
      }

      this.products = productsAll
    })
  }
}
