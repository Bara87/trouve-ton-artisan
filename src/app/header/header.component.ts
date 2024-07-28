import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchText) {
      this.router.navigate(['/artisans'], { queryParams: { search: this.searchText } });
    }
  }

  onFocus(): void {
    this.router.navigate(['/artisans']);
  }
  }
