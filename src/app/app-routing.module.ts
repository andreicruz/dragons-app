import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDragonsComponent } from './components/dragons/list-dragons/list-dragons.component';
import { AboutDragonComponent } from './components/dragons/about-dragon/about-dragon.component';


const routes: Routes = [
  { path: 'dragons',  component: ListDragonsComponent },
  { path: 'dragon/:id', component: AboutDragonComponent },
  { path: '', component: ListDragonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
