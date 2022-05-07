import { gql } from '@apollo/client'

export const RECIPE_DETAILS = gql`
  fragment RecipeDetails on Recipe {
    id
    title
    category
    servings
    cookingTime
    rating
    ingredients
    instructions
    dateAdded
    image
  }
`

export const INGREDIENT_DETAILS = gql`
  fragment IngredientDetails on Shoppingbag {
    id
    ingredient
  }
`