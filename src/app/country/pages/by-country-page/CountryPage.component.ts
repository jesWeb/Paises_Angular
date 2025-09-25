import { ChangeDetectionStrategy, Component, inject, resource, signal } from '@angular/core';
import { CountryListComponent } from "../../components/Country-list/Country-list.component";
import { CountrySearchInputComponent } from "../../components/Country-search-input/Country-search-input.component";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'country-page',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './CountryPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CountryPageComponent {

  //inyectar service
  countryService = inject(CountryService)
  query = signal('')

  //con RXS

  countryResource = rxResource({

    params: () => ({ query: this.query() }),

    stream: ({ params }) => {
      if (!params.query) return of([])
      return this.countryService.SearchByCountry(params.query)
    }


  })


  // Reactividad -Con promesas
  // countryResource = resource({

  //   params: () => ({ query: this.query() }),

  //   loader: async ({ params }) => {
  //     if (!params.query) {
  //       return []
  //     }

  //     return await firstValueFrom(
  //       this.countryService.SearchByCountry(params.query)
  //     )

  //   }


  // })


}
