import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent {
  recipe = {
    name: '',
    ingredients: '',
    instructions: ''
  };

  constructor() { }

  updateName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.recipe.name = target.value;
  }

  updateIngredients(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.recipe.ingredients = target.value;
  }

  updateInstructions(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.recipe.instructions = target.value;
  }
  onSubmit(event: Event) {
    event.preventDefault(); 

    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    recipes.push(this.recipe)
    localStorage.setItem('recipes', JSON.stringify(recipes));
    this.recipe = { name: '', ingredients: '', instructions: '' };
    alert('Receta agregada con éxito!');
  }
}
