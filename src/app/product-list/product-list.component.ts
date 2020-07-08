import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { QuerySnapshot } from "@firebase/firestore-types";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductLIstComponent implements OnInit {

  products: Product[];

  @Output() onProductClick: EventEmitter<string>
    = new EventEmitter();

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firestore.collection('products').ref.onSnapshot((snapshots: QuerySnapshot) => {
      this.products = snapshots.docs.map((document, index, documents) => {
        return new Product(document.data()['id'], document.data()['name'], document.data()['cost'], document.data()['quantity']);
      });
    });
  }

  emit(productId: string) {
    this.onProductClick.emit(productId);
  }
}

class Product {
  constructor(public id: string, public name: string, public cost: number, public quantity: number) { }
}