import { Component } from '@angular/core';
import { Cv } from '../models/cv'
import { CvServiceService } from '../services/cv-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  cvs: Cv[]= [];
  constructor(
    private cvService: CvServiceService,
    private readonly toasterService: ToastrService,
  ){
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: (err) => {
        this.toasterService.error('API problem');
        this.cvs = this.cvService.getLocalCvs() ;
      }
    });
  }

  selectedCv: Cv | null = null;

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    console.log(cv);
  }
}
