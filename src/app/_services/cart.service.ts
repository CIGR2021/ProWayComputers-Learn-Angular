import { Injectable } from '@angular/core';
import { ICartItems } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: ICartItems[] = []

  getCartItems() {
    this.items = JSON.parse(localStorage.getItem('cart') || '[]')
    return this.items
  }

  addToCart(product: ICartItems) {
    this.items.push(product)
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  removeOfCart(productId: number) {
    this.items = this.items.filter(item => item.id !== productId)
    localStorage.setItem('cart', JSON.stringify(this.items))
  }

  clearCart() {
    this.items = []
    localStorage.clear()
  }
}
