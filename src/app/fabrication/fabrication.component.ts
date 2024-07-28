import { Component, OnInit } from '@angular/core';
import { ArtisanDataService, Artisan } from '../artisan-data.service';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-fabrication',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fabrication.component.html',
  styleUrls: ['./fabrication.component.scss']
})
export class FabricationComponent implements OnInit {
  artisans: Artisan[] = [];

  constructor(private artisanDataService: ArtisanDataService, private router: Router) {}

  ngOnInit(): void {
    this.artisans = this.artisanDataService.getArtisansByCategory('Fabrication');
  }

  selectArtisan(artisan: Artisan): void {
    console.log('Navigating to artisan detail with ID:', artisan.id);
    this.artisanDataService.setCurrentArtisanId(artisan.id);
    this.router.navigate(['/artisan-detail']);
  }
}