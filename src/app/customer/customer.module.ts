import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GetApiComponent } from './get-api/get-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateApiComponent } from './update-api/update-api.component';
import { GetByIdApiComponent } from './get-by-id-api/get-by-id-api.component';

@NgModule({
  declarations: [
    AboutComponent,
    GetApiComponent,
    PostApiComponent,
    UpdateApiComponent,
    GetByIdApiComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ]
})
export class CustomerModule { }
