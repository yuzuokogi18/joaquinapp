import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-visualizar',
  standalone: true,
  imports: [NgFor,NgIf,RouterOutlet],
  templateUrl: './visualizar.component.html',
  styleUrl: './visualizar.component.css'
})
export class VisualizarComponent {
  recipes: any[] = []; 

  ngOnInit(): void {
    this.loadRecipes();
  }
  loadRecipes(): void {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    }
  }

}
