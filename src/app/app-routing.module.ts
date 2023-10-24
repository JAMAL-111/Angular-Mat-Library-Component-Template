import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputComponent } from './input/input.component';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './card/card.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { FormdesignComponent } from './formdesign/formdesign.component';

const routes: Routes = [
  //{path:'autocomplete', component:AutocompleteComponent},
  {path:'input',component:InputComponent},
  {path:'home', component:HomeComponent},
  {path:'card', component:CardComponent},
  {path:'table', component:TableComponent},
  {path:'login', component:LoginComponent},
  {path: 'form', component:FormdesignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
