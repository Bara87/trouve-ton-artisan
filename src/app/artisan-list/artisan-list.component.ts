import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisanDataService, Artisan } from '../artisan-data.service';
import { SearchPipe } from '../search.pipe';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  standalone: true,
  imports: [CommonModule, SearchPipe, RouterModule],
  selector: 'app-artisan-list',
  templateUrl: './artisan-list.component.html',
  styleUrls: ['./artisan-list.component.scss']
})
export class ArtisanListComponent implements OnInit {
  searchText: string = '';
  artisans: Artisan[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router, // Inject Router
    private artisanDataService: ArtisanDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['search'] || '';
      this.artisans = this.artisanDataService.getArtisans();
    });
  }

  selectArtisan(artisan: Artisan): void {
    console.log('Navigating to artisan detail with ID:', artisan.id);
    this.artisanDataService.setCurrentArtisanId(artisan.id);
    this.router.navigate(['/artisan-detail']);
  }
}