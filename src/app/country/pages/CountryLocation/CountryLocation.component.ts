import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { NotFoundComponent } from "../../../shared/components/not-found/not-found.component";
import { CountryInfoPageComponent } from "./country-info-page/country-info-page.component";

@Component({
  selector: 'app-country-location',
  imports: [NotFoundComponent, CountryInfoPageComponent],
  templateUrl: './CountryLocation.component.html'
})
export class CountryLocationComponent {
  //obtener parametro de la ruta
  countryCode = inject(ActivatedRoute).snapshot.params['country']
  //sercicio
  countryService = inject(CountryService)

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => {
      return this.countryService.SearchCountryInfo(params.code)
    }


  })



}
