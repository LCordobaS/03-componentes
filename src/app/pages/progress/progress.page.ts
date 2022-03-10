import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number=0.05;

  constructor() { }

  ngOnInit() {
  }
  rangoChanse(event){
    //console.log(event=this.porcentaje)
    this.porcentaje = event.detail.value / 100;
  }
}
