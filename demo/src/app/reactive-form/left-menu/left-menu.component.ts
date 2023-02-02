import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  menuItems=[
    {matIcon:'account_circle', iconColor:'#8400ff',displayName:'Profile Settings'},
    {matIcon:'settings', iconColor:'#fb9302',displayName:'App Settings'},
    {matIcon:'backup', iconColor:'#008a3c',displayName:'Backup'},
    {matIcon:'translate', iconColor:'#ad4a20',displayName:'Language'},
    {matIcon:'logout', iconColor:'#F44336',displayName:'Logout'},
  ]
}
