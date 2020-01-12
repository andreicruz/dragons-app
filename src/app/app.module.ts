import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListDragonsComponent } from './components/dragons/list-dragons/list-dragons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditDragonsComponent } from './components/dragons/edit-dragons/edit-dragons.component';
import { RemoveDragonsComponent } from './components/dragons/remove-dragons/remove-dragons.component';
import { AboutDragonComponent } from './components/dragons/about-dragon/about-dragon.component';
import { CreateDragonsComponent } from './components/dragons/create-dragons/create-dragons.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './components/login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListDragonsComponent,
    EditDragonsComponent,
    RemoveDragonsComponent,
    AboutDragonComponent,
    CreateDragonsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDragonsComponent, RemoveDragonsComponent]
})
export class AppModule { }
