import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './Country-search-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySearchInputComponent {

  //pasar
  value = output<string>()

  //placeholder
  placeholder = input('Buscar')

}
