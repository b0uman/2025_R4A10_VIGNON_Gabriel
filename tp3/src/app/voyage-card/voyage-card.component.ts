import { Component ,EventEmitter, Input, Output } from '@angular/core';
import {Voyage} from "../../services/voyage.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-voyage-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voyage-card.component.html',
  styleUrl: './voyage-card.component.scss'
})
export class VoyageCardComponent {
  @Input() voyage!: Voyage;
  @Output() deleteVoyage = new EventEmitter<string>();
  @Output() viewDetails = new EventEmitter<string>();

  showConfirmModal = false;
  openConfirmModal() {
    this.showConfirmModal = true;
  }
  closeConfirmModal() {
    this.showConfirmModal = false;
  }

  onDelete(event: Event): void {
    event.stopPropagation();
    this.deleteVoyage.emit(this.voyage.id);
    this.showConfirmModal = false;
  }

  onViewDetails(event: Event): void {
    event.stopPropagation();
    this.viewDetails.emit(this.voyage.id);
  }
}
