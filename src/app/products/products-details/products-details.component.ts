import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/_services/notification.service';
import { ICartItems, IProduct } from 'src/app/products';
import { ProductsService } from 'src/app/_services/products.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.sass']
})

export class ProductsDetailsComponent {
  product: IProduct | undefined
  quantity = 1

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap
    const productId = Number(routeParams.get('id'))

    this.product = this.productsService.getOne(productId)
  }

  addToCart() {
    this.notificationService.notify('Produto adicionado ao carrinho, com sucesso!')
    const newProduct: ICartItems = {
      ...this.product!,
      quantity: this.quantity
    }
    this.cartService.addToCart(newProduct)
  }
}
