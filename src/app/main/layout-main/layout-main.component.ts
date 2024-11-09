import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ListProductsComponent } from '../../components/products/list-products/list-products.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [ListProductsComponent],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.scss'
})
export class LayoutMainComponent implements OnInit {

  constructor(private titleService: Title,
    private routeTitle: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.routeTitle.paramMap.subscribe(params => {
      const path = params.get('path');
      if (path) {
        this.titleService.setTitle(path);
      }
    });
  }

}
