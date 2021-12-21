import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string = 'Nombre Usuario';
  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombre = 'Jose Navarrete';
  }

  hijoCambioNombre( nuevoNombre:string ){
    this.nombre = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }
}
