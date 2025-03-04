import { Component } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../../data';
import {VoyageService} from "../../services/voyage.service";
import {Voyage} from "../../services/voyage.service";
import {Router} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-generateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generateur.component.html',
  styleUrl: './generateur.component.scss'
})
export class GenerateurComponent {
  voyage?: Voyage;

  constructor(private voyageService: VoyageService, private router: Router) {}

  genererVoyage() {
    this.voyage = {
      id: this.voyageService.generateId(),
      destination: DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)],
      description: DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)],
      prix: PRIX[Math.floor(Math.random() * PRIX.length)]
    };
  }

  validerVoyage() {
    if (this.voyage) {
      this.voyageService.addVoyage(this.voyage);
      this.router.navigate(['/voyage-detail', this.voyage.id]);
    }
  }
}
