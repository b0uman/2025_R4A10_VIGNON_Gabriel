import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import{VoyageService} from "../../services/voyage.service";
import {Voyage} from "../../services/voyage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-voyage-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './voyage-detail.component.html',
  styleUrl: './voyage-detail.component.scss'
})
export class VoyageDetailComponent implements OnInit {
  voyage!: Voyage | undefined;
  @Output() deleteVoyage = new EventEmitter<string>();
  showConfirmModal = false;


  constructor(
    private route: ActivatedRoute,
    private voyageService: VoyageService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.voyage = this.voyageService.findOne(id);
    }
  }
  openConfirmModal(){
    this.showConfirmModal=true;
  }
  closeConfirmModal(){
    this.showConfirmModal=false;
  }
  onDelete(event : Event): void{
    event.stopPropagation();
    if(this.voyage?.id){
      this.voyageService.deleteVoyage(this.voyage.id)
      this.deleteVoyage.emit(this.voyage.id);
      this.closeConfirmModal();
      this.router.navigate(['/']);
    }
  }


}
