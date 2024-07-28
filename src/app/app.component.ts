import { Component } from '@angular/core';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [RouterModule, RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

}