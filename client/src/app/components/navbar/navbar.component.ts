import { Component, Output, Input, EventEmitter, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass, CommonModule, MenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('drawerRef') drawerRef!:Drawer;

  closeCallback(e:any):void{
    this.drawerRef.close(e);
  }

  visible: boolean = false;

  ProfileMenuItems: MenuItem[] | undefined;

  ngOnInit(){
    this.ProfileMenuItems = [
      {label: "Sign Out", icon: "pi pi-sign-out"},
      { label: "Settings", icon: "pi pi-cog", styleClass:"hover:bg-violet-200"},
    ];
  }
}
