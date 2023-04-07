import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/_services/cart.service';
import { NotificationService } from 'src/app/_services/notification.service';
import { ICartItems } from 'src/app/products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent {
  cartItems: ICartItems[] = []
  total: number = 0

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems()
    this.calcTotal()
  }

  buy() {
    this.notificationService.success('Parabéns, você finalizou a sua compra!')
    this.cartService.clearCart()
    this.router.navigate(['products'])
  }

  calcTotal() {
    this.total = this.cartItems.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
  }

  removeOfCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId)
    this.cartService.removeOfCart(productId)
    this.calcTotal()
  }
}
