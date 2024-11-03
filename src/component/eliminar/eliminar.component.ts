import { Component, OnInit } from '@angular/core';
import { PlanificadoresService } from '../service/PlanificadoresService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  planners: any[] = []; 

  constructor(private planificadoresService: PlanificadoresService) {}

  ngOnInit() {
    this.loadPlanners(); 
  }

  loadPlanners() {
    this.planificadoresService.getPlanificadores().subscribe((response) => {
      if (Array.isArray(response)) {
        this.planners = response;
      } else {
        console.error('Error: el dato obtenido no es un array');
        this.planners = []; 
      }
    });
  }

  deletePlanner(id: number) {
    this.planificadoresService.deletePlanificador(id).subscribe(() => {
      alert('Planificador eliminado con éxito');
      this.loadPlanners(); 
    });
  }
}
