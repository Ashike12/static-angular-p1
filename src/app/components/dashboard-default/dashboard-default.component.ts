import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-default',
  templateUrl: './dashboard-default.component.html',
  styleUrls: ['./dashboard-default.component.scss']
})
export class DashboardDefaultComponent implements OnInit {
  menuItems = [
    {
      Name: 'Home 1',
      Route: '/home',
      HasChildren: true,
      IsChildVisible: false,
      Children: []
    },
    {
      Name: 'Home 2',
      Route: '/home',
      HasChildren: true,
      IsChildVisible: false,
      Children: []
    },
    {
      Name: 'Home 3',
      Route: '/home',
      HasChildren: true,
      IsChildVisible: false,
      Children: [
        {
          Name: 'Home 11',
          Route: '/home',
          HasChildren: true,
          IsChildVisible: false,
          Children: []
        },
        {
          Name: 'Home 12',
          Route: '/home',
          HasChildren: true,
          IsChildVisible: false,
          Children: [
            {
              Name: 'Home 111',
              Route: '/home',
              HasChildren: true,
              IsChildVisible: false,
              Children: []
            },
            {
              Name: 'Home 112',
              Route: '/home',
              HasChildren: true,
              IsChildVisible: false,
              Children: []
            }
          ]
        }
      ]
    }
  ];

  selectedMenu: any;

  ngOnInit(): void {
    this.selectedMenu = this.menuItems[0]
  }
}
