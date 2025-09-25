import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from "../../components/Country-list/Country-list.component";
import { CountrySearchInputComponent } from "../../components/Country-search-input/Country-search-input.component";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-ciudad',
  imports: [CountrySearchInputComponent, CountryListComponent],
  templateUrl: './ciudad.component.html',
})

export class CiudadComponent {


  //inyectar service
  private countryService = inject(CountryService)
  query = signal('')

  //Reactividad - Trabaja con promesas
  // countryResource = resource({

  //   params: () => ({ query: this.query() }),

  //   loader: async ({ params }) => {
  //     if (!params.query) {
  //       return []
  //     }

  //     return await firstValueFrom(
  //       this.countryService.busquedaByCapital(params.query)
  //     )

  //   }


  // })


  //rxResource

  public countryResource = rxResource({
    // request define lo que cambia y dispara recargas
    params: () => ({ query: this.query() }),
    // loader usa ese request y devuelve un observable
    stream: ({ params }) => {
      if (!params.query) {
        return of([]);
      }
      return this.countryService.busquedaByCapital(params.query);
    },

  });


  //sin el inyectable

  // isLoading = signal(false)
  // isError = signal<string | null>(null)
  // countries = signal<Country[]>([])

  // onSearch(query: string) {

  //   if (this.isLoading()) {
  //     return
  //   }

  //   this.isLoading.set(true);
  //   this.isError.set(null)


  //   this.countryService.busquedaByCapital(query).subscribe({

  //     next: (countries) => {
  //       this.isLoading.set(false),
  //         this.countries.set(countries)
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this.isLoading.set(false),
  //         this.countries.set([])
  //       this.isError.set(err)
  //     },



  //   });
  // }

}
