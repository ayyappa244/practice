import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['product_name', 'product', 'cost', 'product_image'];
  dataSource = [];
  constructor(public productServiceService: ProductServiceService) { }

  ngOnInit() {
  }
  loadProducts() {
    this.productServiceService.loadProductList().subscribe((res: any) => {
      let apiDataTable = []
      for (let i = 0; i < res.length; i++) {
        let obj = {'product_name':res[i].product_name, 
        'product':res[i].product, 
        'cost':res[i].cost,
          'product_image':res[i].product_image};
          apiDataTable.push(obj);
      }
      this.dataSource = apiDataTable;
    })
  }
}
