import { Component, OnInit } from '@angular/core';

import { routerTransition } from '../shared/router.animations';

@Component({
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  animations: [routerTransition()]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
