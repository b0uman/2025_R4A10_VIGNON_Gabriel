import { Injectable } from '@angular/core';
export interface Voyage {
  id: string;
  destination: string;
  description: string;
  prix: number;
}
@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  private voyages: Voyage[] = [{
    id:this.generateId(),
    destination:'Kyoto, Japon',
    description:'Une expérience unique entre culture ancestrale et modernité vibrante.',
    prix:1000,
  }];
  constructor() { }
  generateId(): string {
    return Math.random().toString().replace('.', '');
  }

  findAll(): Voyage[] {return this.voyages}
  findOne(id: string): Voyage | undefined{
    return this.voyages.find((t) => t.id === id);
  }

  addVoyage(voyage:Voyage): void {
    this.voyages.push(voyage);
  }
  deleteVoyage(id: string): void {
    this.voyages = this.voyages.filter(voyage => voyage.id !== id);
  }
}
