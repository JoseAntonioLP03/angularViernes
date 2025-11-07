import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { PersonasComponent } from './components/personas-component/personas-component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"personas",component:PersonasComponent},
];
