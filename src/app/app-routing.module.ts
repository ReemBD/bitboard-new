import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolverService } from './services/contact-resolver.service';

const routes: Routes = [
  { path: 'edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } },
  { path: 'edit', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolverService } },
  { path: 'contact', component: ContactPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }