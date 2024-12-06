import { Component } from '@angular/core';
import { PlanificadoresService } from '../service/PlanificadoresService';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  planificador: any = {
    name: '',
    details: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: ''
  };

  constructor(
    private planificadoresService: PlanificadoresService,
    private router: Router
  ) {}

  addPlanificador() {
    if (!this.planificador.name || !this.planificador.details ||
        !this.planificador.start_date || !this.planificador.end_date ||
        !this.planificador.start_time || !this.planificador.end_time) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const formattedPlanificador = {
      ...this.planificador,
      start_date: this.formatDate(this.planificador.start_date),
      end_date: this.formatDate(this.planificador.end_date),
      start_time: this.formatTime(this.planificador.start_time),
      end_time: this.formatTime(this.planificador.end_time)
    };
    if (!formattedPlanificador.start_date || !formattedPlanificador.end_date || 
        !formattedPlanificador.start_time || !formattedPlanificador.end_time) {
      alert('Las fechas o horas ingresadas no son válidas. Por favor, corríjalas.');
      return;
    }

    this.planificadoresService.addPlanificador(formattedPlanificador).subscribe(
      response => {
        alert('Planificador agregado con éxito');
        this.router.navigate(['/agregar']);
        this.planificador = { name: '', details: '', start_date: '', end_date: '', start_time: '', end_time: '' };
      },
      error => {
        console.error('Error al agregar planificador:', error);
        alert('Hubo un error al agregar el planificador. Por favor, inténtalo de nuevo.');
      }
    );
  }

  private formatDate(dateString: string): string {
    const [day, month, year] = dateString.split('/');
    if (!day || !month || !year || day.length !== 2 || month.length !== 2 || year.length !== 4) {
      alert('Fecha inválida. Por favor, ingrese una fecha en el formato DD/MM/YYYY.');
      return '';
    }
    return `${year}-${month}-${day}`;
  }

  private formatTime(timeString: string): string {
    const [time, modifier] = timeString.split(' ');
    if (!time || !modifier || (modifier !== 'AM' && modifier !== 'PM')) {
      alert('Hora inválida. Por favor, ingrese una hora válida en formato HH:mm AM/PM.');
      return '';
    }
    let [hours, minutes] = time.split(':');
    if (modifier === 'PM' && hours !== '12') {
      hours = (parseInt(hours) + 12).toString();
    }
    if (modifier === 'AM' && hours === '12') {
      hours = '00';
    }
    return `${hours}:${minutes}:00`;
  }
}
