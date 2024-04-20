import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listesdesemployers',
  templateUrl: './listesdesemployers.component.html',
  styleUrls: ['./listesdesemployers.component.css']
})
export class ListesdesemployersComponent implements OnInit {
  employees: any[] = [
    { id: 1, name: 'John Doe', position: 'Développeur' },
    { id: 2, name: 'Jane Smith', position: 'Concepteur UI/UX' },
    { id: 3, name: 'Michael Johnson', position: 'Ingénieur logiciel' },
    { id: 4, name: 'Emily Williams', position: 'Gestionnaire de projet' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}