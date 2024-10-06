import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-verreseta',
  standalone: true,
  imports: [NgFor,NgIf,RouterOutlet],
  templateUrl: './verreseta.component.html',
  styleUrl: './verreseta.component.css'
})
export class VerresetaComponent {
  recipes: any[] = [];

  constructor() {}

  ngOnInit(): void {
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      this.recipes = JSON.parse(storedRecipes);
    }
  }
}
