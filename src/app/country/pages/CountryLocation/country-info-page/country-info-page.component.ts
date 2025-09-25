import { Component, computed, input } from '@angular/core';
import { Country } from '../../../interfaces/data-country.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-info-page',
  imports: [DecimalPipe],
  templateUrl: './country-info-page.component.html'
})
export class CountryInfoPageComponent {
  country = input.required<Country>()

  currentYear = computed(() => {
    return new Date().getFullYear()
  })



}
