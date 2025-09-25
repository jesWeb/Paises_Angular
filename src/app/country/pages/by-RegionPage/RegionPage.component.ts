import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryListComponent } from "../../components/Country-list/Country-list.component";

@Component({
  selector: 'region-page',
  imports: [],
  templateUrl: './RegionPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionPageComponent { }
