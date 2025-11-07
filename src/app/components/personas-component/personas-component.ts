import { Component , OnInit} from '@angular/core';
import {NgFor, NgIf } from '@angular/common';

import { ServicePersonas } from '../../services/personaService';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-component',
  templateUrl: './personas-component.html',
  styleUrl: './personas-component.css',
  providers: [ServicePersonas],
  imports:[NgFor,NgIf]
})
export class PersonasComponent implements OnInit {
  public personas!: Array<Persona>;
  constructor(private _service:ServicePersonas) {
  }

  ngOnInit(): void {
    this._service.getPersonasFetch().then(response => {
      console.log("Leyendo")
      this.personas = response
    })
  }

}
