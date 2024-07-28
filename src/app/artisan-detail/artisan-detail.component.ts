import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanDataService, Artisan } from '../artisan-data.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-artisan-detail',
  templateUrl: './artisan-detail.component.html',
  styleUrls: ['./artisan-detail.component.scss']
})
export class ArtisanDetailComponent implements OnInit {
  artisan: Artisan | undefined;

  name = '';
  subject = '';
  message = '';
  formSubmitted = false; // Variable to control the validation state

  constructor(
    private router: Router,
    private artisanDataService: ArtisanDataService
  ) {}

  ngOnInit(): void {
    this.artisan = this.artisanDataService.getCurrentArtisan();
    if (this.artisan) {
      console.log('Artisan found:', this.artisan);
    } else {
      console.log('No artisan found.');
    }
  }

  submitForm() {
    this.formSubmitted = true;

    if (!this.artisan) return;

    if (!this.name || !this.subject || !this.message) {
      return;
    }

    const formData = {
      artisanId: this.artisan.id,
      name: this.name,
      subject: this.subject,
      message: this.message
    };

    console.log('Form data to submit:', formData);
    this.resetForm();  // Reset form after "submission"
  }

  resetForm() {
    this.name = '';
    this.subject = '';
    this.message = '';
    this.formSubmitted = false;
  }
	}

