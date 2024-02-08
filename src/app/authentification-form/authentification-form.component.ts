import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { NgForm } from '@angular/forms';
import { UserStore } from '../UserStore/user-store';


@Component({
  selector: 'app-authentification-form',
  templateUrl: './authentification-form.component.html',
  styleUrl: './authentification-form.component.css'
})
export class AuthentificationFormComponent {

  constructor(private authService : AuthentificationService,
    private userStore: UserStore)
  {}

  login(form : NgForm){
    this.authService.login(form.value).subscribe({
      next :(res) => {
        this.userStore.setUser({id: res['id'], email: form.value.email});
      }
   ,
   error: (err) => {
    console.log(err.message);
  }});
  }
}

