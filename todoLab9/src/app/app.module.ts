import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCreateComponent } from './todoLab9/todo-create/todo-create.component';
import { TodoDetailsComponent } from './todoLab9/todo-details/todo-details.component';
import { TodoListComponent } from './todoLab9/todo-list/todo-list.component';
import { TodoTitleComponent } from './todoLab9/todo-title/todo-title.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoCreateComponent,
    TodoDetailsComponent,
    TodoListComponent,
    TodoTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
