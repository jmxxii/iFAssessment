import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountViewComponent } from './account-view/account-view.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


const routes: Routes = [{path: '', component: AccountViewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatToolbarModule, MatButtonModule, MatFormFieldModule],
  exports: [RouterModule, MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule]
})
export class AppRoutingModule { }
