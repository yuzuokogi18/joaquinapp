import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { PlanificadoresService } from '../service/PlanificadoresService';
import { CommonModule, NgIf } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-visualizar',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  planners: any[] = []; 

  constructor(private planificadoresService: PlanificadoresService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadPlanners();  
  }

  loadPlanners() {
    this.planificadoresService.getPlanificadores().subscribe((planners) => {
      console.log('Planners recibidos:', planners);
      this.planners = planners;  
      this.cd.detectChanges(); 
    }, (error) => {
      console.error('Error al cargar los planificadores:', error);
    });
  
}
}