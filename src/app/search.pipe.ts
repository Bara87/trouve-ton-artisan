import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from './artisan-data.service';

@Pipe({
  name: 'search',
  standalone: true,
  
})

export class SearchPipe implements PipeTransform {
  transform(artisans: Artisan[], searchText: string): Artisan[] {
    if (!artisans || !searchText) {
      return artisans;
    }

    return artisans.filter(artisan =>
      artisan.name.toLowerCase().includes(searchText.toLowerCase()) ||
      artisan.specialty.toLowerCase().includes(searchText.toLowerCase()) ||
      artisan.location.toLowerCase().includes(searchText.toLowerCase())
    );
  }
}