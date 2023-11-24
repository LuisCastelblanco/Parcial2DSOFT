import { Component,Input, OnInit } from '@angular/core';
import { Dinosaurios } from '../dinosaurios';

@Component({
  selector: 'app-dinosaurios-detail',
  templateUrl: './dinosaurios-detail.component.html',
  styleUrls: ['./dinosaurios-detail.component.css']
})
export class DinosauriosDetailComponent implements OnInit {

  @Input() dinosauriosDetail!:Dinosaurios;

  constructor() { }

  ngOnInit() {
  }

}
