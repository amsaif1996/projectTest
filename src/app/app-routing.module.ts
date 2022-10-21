import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListItemComponent} from "./components/list-item/list-item.component";

const routes: Routes = [
  {path: 'authors',component:ListItemComponent},
  {path: 'favAuthors',component:ListItemComponent},
  { path: '', redirectTo: 'authors', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
