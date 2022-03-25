import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './components/child-a/child-a.component';
import { ChildBComponent } from './components/child-b/child-b.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { AuthguardDGuard } from './guards/authguard-d.guard';
import { AuthguardGuard } from './guards/authguard.guard';

const routes: Routes = [ 
  {
    path: 'first-page', 
    component: FirstComponentComponent,
    // canActivate: [AuthguardGuard],
  },
  {
    path: 'second-page', 
    component: SecondPageComponent,
    // canActivate: [AuthguardGuard],
    // canDeactivate: [AuthguardDGuard]
  },
  {path: '', redirectTo:'/first-page', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
