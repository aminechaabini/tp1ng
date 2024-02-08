import { Injectable } from '@angular/core';
import { Cv } from '../models/cv';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  cvs : Cv[];
  constructor(private toastr: ToastrService) {
    this.cvs =[];
   }
   getEmbauches() : Cv[]{
    return this.cvs;
   }

   embaucher(cv: Cv): void{
    const index = this.cvs.indexOf(cv);
    if(index < 0){
      this.cvs.push(cv);
    }
    else{
      this.toastr.error('Personne deja embauchée!');
    }
   }
   debaucher(cv: Cv): void{
    const index = this.cvs.indexOf(cv);
    if(index >= 0){
      this.cvs.splice(index,1);
    }
    else{
      alert('${cv.name} n est pas embauché! ')
    }
   }
}
