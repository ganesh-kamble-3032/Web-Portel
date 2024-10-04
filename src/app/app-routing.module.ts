import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrationsComponent } from './components/registrations/registrations.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingComponent } from './components/booking/booking.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'menu',component:MenuComponent
  },
  {
    path:'registrations',component:RegistrationsComponent
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'booking',component:BookingComponent
  },
  {
    path:'feedback',component:FeedbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
