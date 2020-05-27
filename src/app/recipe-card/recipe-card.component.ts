import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from '../model/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeEdit = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  editRecipe($event) {
    this.recipeEdit.emit(this.recipe);
    $event.stopPropagation();
  };

}
