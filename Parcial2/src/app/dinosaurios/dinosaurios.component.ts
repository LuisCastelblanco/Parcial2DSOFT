import { Component, OnInit } from '@angular/core';
import { Dinosaurios } from './dinosaurios';
import { DinosauriosService } from './dinosuarios.service';

@Component({
  selector: 'app-dinosaurios',
  templateUrl: './dinosaurios.component.html',
  styleUrls: ['./dinosaurios.component.css']
})
export class DinosauriosComponent implements OnInit {

  dinosaurios: Array<Dinosaurios> = [];
  selectedDinosaurio!: Dinosaurios;
  selected: Boolean = false;


  constructor(private dinosauriosService: DinosauriosService) { }

  onSelected(dinosaurio: Dinosaurios): void {
    this.selected = true;
    this.selectedDinosaurio = dinosaurio;
  }
  ngOnInit() {
  }

}
