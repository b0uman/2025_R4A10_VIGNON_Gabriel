import { Component } from '@angular/core';
import {VoyageService} from "../../services/voyage.service";
import { Router } from '@angular/router';
import { VoyageCardComponent } from '../voyage-card/voyage-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,VoyageCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  voyages = this.voyageService.findAll();

  constructor(private voyageService: VoyageService, private router: Router) {}

  onDeleteVoyage(id: string) {
    this.voyageService.deleteVoyage(id);
    this.voyages = this.voyageService.findAll();
  }

  onViewDetails(id: string) {
    this.router.navigate(['/voyage-detail', id]);
  }
}
