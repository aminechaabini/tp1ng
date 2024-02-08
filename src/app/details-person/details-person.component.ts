import { Component } from '@angular/core';
import { Cv } from '../models/cv';
import { CvComponent } from '../cv/cv.component';
import { ROUTES } from '../app.routing';
import { ActivatedRoute } from '@angular/router';
import { CvServiceService } from '../services/cv-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-person',
  templateUrl: './details-person.component.html',
  styleUrl: './details-person.component.css'
})
export class DetailsPersonComponent {
  cv : any;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly cvService: CvServiceService,
    private readonly router: Router
  ){
    this.activatedRoute.params.subscribe((params) => {
      const id = +params['id'];
      this.cvService.getCvs().subscribe({
        next: (cvs) => {
          this.cv = cvs.find((sCv :Cv) => sCv.id == id);
        },
        error: (err) => {
          const localCvs = cvService.getLocalCvs();
          this.cv = localCvs.find((sCv: Cv) => sCv.id == id);
        },
      });
    });
    
  }


  async deleteCV() {
    this.cvService.deleteCv(this.cv?.id ?? -1).subscribe({
      next: () => {
        this.router.navigate([ROUTES.cv]);
      },
      error: (err) => {
        this.router.navigate([ROUTES.cv]);
      },
    });
  }
};

