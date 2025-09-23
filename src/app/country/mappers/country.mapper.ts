import { RESTCountry } from '../interfaces/country.interface';
import { Country } from '../interfaces/data-country.interface';

export class CountryMap {

  //static RestCountri => country
  //  aqui creas el nuevo
  static mapItemRestCountry(item: RESTCountry): Country {
    return {
      capital: item.capital.join(','),
      cca2: item.cca2,
      flag: item.flag,
      flagSvg: item.flags.svg,
      name: item.translations['spa'].common ?? 'no Hay nombre',
      population: item.population

    }
  }

  //static RestCountry[] => country
  //map el nuevo objeto de arriba un json nuevo
  static mapeoItemRestCountry(items: RESTCountry[]): Country[] {
    return items.map(this.mapItemRestCountry)
  }


}
