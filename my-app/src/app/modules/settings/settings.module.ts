import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsRouting } from './settings-routing.module';
import { LoginComponent } from '../login/login.component';



@NgModule({
  declarations: [
    AccountComponent,
    FavoritesComponent,
    ProfileComponent,
    LoginComponent,
    

  ],
  imports: [
    CommonModule,SettingsRouting
  ]
})
export class SettingsModule { }
