import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/redusers';
import { AppComponent } from './app.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ShowTodoComponent } from './show-todo/show-todo.component';
import { CheckedTodoComponent } from './checked-todo/checked-todo.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './redux/effects';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/httpservice'

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoComponent,
    ShowTodoComponent,
    CheckedTodoComponent,
    MainPageComponent,
   
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule, 
    StoreModule.forRoot({
      todo: reducer
    }),
   EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
          })
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
