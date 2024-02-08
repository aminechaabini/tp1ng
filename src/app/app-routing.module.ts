import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ArcEnCielComponent } from './arc-en-ciel/arc-en-ciel.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import { DetailsPersonComponent } from './details-person/details-person.component';

const routes: Routes = [    {path: 'cv', component: CvComponent},
{path : 'rainbow', component: ArcEnCielComponent},
{path:'miniWord', component: MiniWordComponent},
{path: 'cv', component: CvComponent},
{path:'login', component: AuthentificationFormComponent},
{path: 'cv/:id', component: DetailsPersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
