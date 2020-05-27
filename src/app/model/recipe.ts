export interface Recipe {
  id: number;
  recipeName: string;
  description: string;
  creationTS: string;
  dishType: string;
  serveCont: number;
  ingredients: string;
  instructions: string;
  noOfPeople: number;
}

export interface RecipeList {
  recipeList: Recipe[];
}
