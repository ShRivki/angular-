import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Route,}from "@angular/router"
import { ProfileComponent } from './profile/profile.component';
import { NgModel } from "@angular/forms"
import { FavoritesComponent } from './favorites/favorites.component';
import { AccountComponent } from './account/account.component'
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

const SETTING_ROUTES: Route[]=[
  { path:"account",component:AccountComponent},
  { path:"favorites",component:FavoritesComponent},
  { path:"profile",component:ProfileComponent},
  {path:"",redirectTo:"account", pathMatch:"full"} ,
  {path:"**",component:PageNotFoundComponent}//בסוף
]


@NgModule({
  imports: [RouterModule.forChild(SETTING_ROUTES)],
  exports: [RouterModule]
})



  export class SettingsRouting{

  }