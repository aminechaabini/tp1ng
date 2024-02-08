import { Component, Input } from '@angular/core';
import { Cv } from "../models/cv";
import { EmbaucheService } from '../services/embauche.service';
import { Router } from '@angular/router';
import { ROUTES } from '../app.routing';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent {

  constructor(private embaucheService:EmbaucheService,
    private readonly router: Router){

  }
  @Input({
    required: true,
  })
  cv: Cv | null = null;
  
  routes = ROUTES;
  embaucher(){
  this.embaucheService.embaucher(this.cv!!);
  }
  afficherDetails(){
    this.router.navigate([this.routes.cvdetails, this.cv?.id ?? 0])
  }
}
