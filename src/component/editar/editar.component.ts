import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  recipe = {
    name: '',
    ingredients: '',
    instructions: ''
  };

  recipeIndex: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeIndex = +params['index']; 
      this.loadRecipe();
    });
  }

  loadRecipe() {
    const recipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    if (this.recipeIndex !== null && recipes[this.recipeIndex]) {
      this.recipe = recipes[this.recipeIndex];
    }
  }

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
    if (this.recipeIndex !== null) {
      recipes[this.recipeIndex] = this.recipe;
      localStorage.setItem('recipes', JSON.stringify(recipes));
      alert('Receta editada con éxito!');
    }
  }
}
