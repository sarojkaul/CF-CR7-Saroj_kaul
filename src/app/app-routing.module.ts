import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogComponent } from './blog/blog.component';
import { TravelsComponent } from './travels/travels.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {

    path:"",component: HomePageComponent

},

{

    path: "blog",component: BlogComponent

},
{

  path: "travels",component: TravelsComponent

},
{

  path:"gallery",component: GalleryComponent

},
{

  path:"contact-us",component: ContactUsComponent

},
{

  path:"services",component: ServicesComponent

},
{

  path:'travel/:travelId',component: TravelDetailsComponent

},
{

  path: "cart",component: CartComponent

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
