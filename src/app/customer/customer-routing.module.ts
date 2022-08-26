import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GetApiComponent } from './get-api/get-api.component';
import { GetByIdApiComponent } from './get-by-id-api/get-by-id-api.component';
import { LoginComponent } from './login/login.component';
import { PostApiComponent } from './post-api/post-api.component';
import { UpdateApiComponent } from './update-api/update-api.component';

const routes: Routes = [
  {
    path:'login/:Id',
    component:LoginComponent

  },
  {
    path:'getApi',
    component:GetApiComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
  ,
  {
    path:'postApi',
    component:PostApiComponent
  }
  ,
  {
    path:'updateApi',
    component:UpdateApiComponent
  }
  ,
  {
    path:'getByIdApi',
    component:GetByIdApiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
