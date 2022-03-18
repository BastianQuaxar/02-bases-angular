import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  rutas = [
    {name: 'Home',
    path: '/home'},
    
    {name: 'About',
    path: '/about'},
    
    {name: 'Contact',
    path: '/contact'},
  
    {name: 'Posts',
    path: '/posts'},
  
  
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
