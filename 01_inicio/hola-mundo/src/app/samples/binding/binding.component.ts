import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  sNombre: string;
  nEdad: number;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nEdad = 22;
  }
  btnBorrar() {
    this.sNombre = '';
  }
}
