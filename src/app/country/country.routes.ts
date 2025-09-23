import { Routes } from "@angular/router";
import { CiudadComponent } from "./pages/ciudad/ciudad.component";
import { CountryLayoutComponent } from "./layouts/Country-layout/Country-layout.component";
import { CountryPageComponent } from './pages/CountryPage/CountryPage.component';
import { RegionPageComponent } from './pages/RegionPage/RegionPage.component';
import { CountryLocationComponent } from "./pages/CountryLocation/CountryLocation.component";

export const CountryRoutes: Routes = [

  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: CiudadComponent
      },
      {
        path: 'by-country',
        component: CountryPageComponent
      },
      {
        path: 'by-Region',
        component: RegionPageComponent
      },
      //dinamico
      {
        path: 'by/:country',
        component: CountryLocationComponent
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]
  },


  {
    path: '**',
    redirectTo: ''
  }



];


export default CountryRoutes;
