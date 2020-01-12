import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDragonsComponent } from './components/dragons/list-dragons/list-dragons.component';
import { AboutDragonComponent } from './components/dragons/about-dragon/about-dragon.component';
import { CreateDragonsComponent } from './components/dragons/create-dragons/create-dragons.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'dragon/create',  component: CreateDragonsComponent, canActivate: [AuthGuard] },
  { path: 'dragons',  component: ListDragonsComponent, canActivate: [AuthGuard] },
  { path: 'dragon/:id', component: AboutDragonComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
