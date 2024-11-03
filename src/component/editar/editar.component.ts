import { Component, OnInit } from '@angular/core';
import { PlanificadoresService } from '../service/PlanificadoresService';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  planners: any[] = [];  
  plannerToEdit: any = null; 

  constructor(private planificadoresService: PlanificadoresService) {}

  ngOnInit(): void {
    this.loadPlanners();  
  }

  loadPlanners() {
    this.planificadoresService.getPlanificadores().subscribe((planners) => {
      this.planners = planners;
    }, (error) => {
      console.error('Error al cargar los planificadores:', error);
    });
  }

  editPlanner(planner: any) {
    this.plannerToEdit = { ...planner }; 
  }

  onSubmit() {
    if (this.plannerToEdit.id) {
      this.planificadoresService.updatePlanificador(this.plannerToEdit.id, this.plannerToEdit).subscribe(() => {
        alert('Planificador editado con éxito');
        this.plannerToEdit = null; // Cierra el formulario de edición
        this.loadPlanners(); // Recarga la lista de planificadores
      }, error => {
        console.error('Error al editar planificador:', error);
        alert('Hubo un error al editar el planificador. Por favor, inténtalo de nuevo.');
      });
    }
  }
}

