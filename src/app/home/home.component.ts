import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ArtisanDataService, Artisan } from '../artisan-data.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artisans: Artisan[] = [];
  topArtisans: Artisan[] = [];
  

  constructor(private artisanDataService: ArtisanDataService, private router: Router) {}

  ngOnInit(): void {
    this.topArtisans = this.artisanDataService.getTopArtisans();
  }

  selectArtisan(artisan: Artisan): void {
    console.log('Navigating to artisan detail with ID:', artisan.id);
    this.artisanDataService.setCurrentArtisanId(artisan.id);
    this.router.navigate(['/artisan-detail']);
  }
}