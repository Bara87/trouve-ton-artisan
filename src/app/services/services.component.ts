import { Component, OnInit } from '@angular/core';
import { ArtisanDataService, Artisan } from '../artisan-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private artisanDataService: ArtisanDataService, private router: Router) {}

  ngOnInit(): void {
    this.artisans = this.artisanDataService.getArtisansByCategory('Services');
  }

  selectArtisan(artisan: Artisan): void {
    console.log('Navigating to artisan detail with ID:', artisan.id);
    this.artisanDataService.setCurrentArtisanId(artisan.id);
    this.router.navigate(['/artisan-detail']);
  }
}