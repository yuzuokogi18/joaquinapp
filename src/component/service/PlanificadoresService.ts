import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Planificador {
  id?: number;
  name: string;
  details: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlanificadoresService {
  private url = 'http://localhost:3001/api/v1/planificadores'; 

  constructor(private http: HttpClient) {}

  getPlanificadorById(id: number): Observable<Planificador> {
    return this.http.get<Planificador>(`${this.url}/${id}`);
  }

  getPlanificadores(): Observable<Planificador[]> {
    return this.http.get<{ status: boolean; data: Planificador[] }>(this.url).pipe(
      map((response) => {
        console.log('Respuesta de la API:', response); 
        return response.data || []; 
      })
    );
  }

  addPlanificador(planificador: Planificador): Observable<Planificador> {
    return this.http.post<Planificador>(this.url, planificador);
  }

  updatePlanificador(id: number, planificador: Planificador): Observable<Planificador> {
    return this.http.put<Planificador>(`${this.url}/${id}`, planificador);
  }

  deletePlanificador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
