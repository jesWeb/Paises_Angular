import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/country.interface';
import { CurrencyPipe, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Country } from '../../interfaces/data-country.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'country-list',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './Country-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class CountryListComponent {

  countries = input.required<Country[]>()

  errorMensaje = input<string | unknown>()
  IsLoadingMensaje = input<boolean>(false)
  IsEmpty = input<boolean>(false)


}
