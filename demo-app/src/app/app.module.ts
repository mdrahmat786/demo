import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightDirective } from './hightlight.directive';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HightlightDirective,
    FirstComponentComponent,
    SecondPageComponent,
    PageNotFoundComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
