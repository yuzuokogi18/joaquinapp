import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  recipes: any[] = [];
  recipeToDelete: number | null = null; 

  constructor(private router: Router) { }

  ngOnInit() {
    this.loadRecipes(); 
  }

  loadRecipes() {
    this.recipes = JSON.parse(localStorage.getItem('recipes') || '[]');
  }

  selectRecipe(index: number) {
    this.recipeToDelete = index;
  }

  deleteRecipe() {
    if (this.recipeToDelete !== null) {
      this.recipes.splice(this.recipeToDelete, 1);
      localStorage.setItem('recipes', JSON.stringify(this.recipes));
      alert('Receta eliminada con éxito!');
      this.loadRecipes();
      this.recipeToDelete = null; 
    }
  }
}
