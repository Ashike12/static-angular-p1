import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent {
  constructor(private router: Router) {

  }
  redirectTo(path: string) {
    this.router.navigate([path])
  }
}
