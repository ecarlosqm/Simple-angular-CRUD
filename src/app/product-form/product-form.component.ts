import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { DocumentSnapshot } from '@firebase/firestore-types';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.less']
})
export class ProductFormComponent implements OnInit, OnChanges {

  cost: number;
  quantity: number;
  name: string;

  loading: boolean;
  populated: boolean;
  allowEdition: boolean = false;

  @Input() id: string;

  error: string = '';

  constructor(private firestore: AngularFirestore) { }

  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.id == null || this.id == '' || this.id == undefined) {
      this.id = this.firestore.createId();
      this.cost = null;
      this.quantity = null;
      this.name = null;
      this.populated = false;
      this.allowEdition = true;
      return;
    }

    this.populate(this.id);
  }

  ngOnInit(): void {

  }

  activateEdition() {
    this.allowEdition = true;
  }

  async populate(id: string) {
    this.populated = true;
    this.allowEdition = false;
    const documentSnapshot: DocumentSnapshot = await this.firestore.collection('products').doc(this.id).ref.get();
    
    if (documentSnapshot.exists) {
      this.id = documentSnapshot.data()['id'];
      this.name = documentSnapshot.data()['name'];
      this.cost = documentSnapshot.data()['cost'];
      this.quantity = documentSnapshot.data()['quantity'];
    }
  }

  async create(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      await this.firestore.collection('products').doc(this.id).set({
        'id': this.id,
        'name': this.name,
        'cost': this.cost,
        'quantity': this.quantity,
      });
      this.loading = false;
      form.resetForm();
    }

  }

  async update(form: NgForm) {
    if (form.valid) {
      this.loading = true;
      await this.firestore.collection('products').doc(this.id).update({
        'id': this.id,
        'name': this.name,
        'cost': this.cost,
        'quantity': this.quantity,
      });
      this.allowEdition = false;
      this.loading = false;
      form.resetForm(form.value);
    }
  }

}
