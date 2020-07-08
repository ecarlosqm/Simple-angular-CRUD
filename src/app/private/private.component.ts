import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.less']
})
export class PrivateComponent implements OnInit {

  currentProductId:string;

  constructor() { }

  ngOnInit(): void {
  }

  newProduct(){
    this.currentProductId = null;
  }

  onSelectProduct(productId:string){
    this.currentProductId = productId;
  }
}
