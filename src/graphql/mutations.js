import { gql } from '@apollo/client'
import { RECIPE_DETAILS, INGREDIENT_DETAILS } from './fragments'

export const ADD_RECIPE = gql`
  mutation AddRecipe(
    $title: String!,
    $category: String!,
    $servings: Int!,
    $cookingTime: Int!,
    $rating: Float,
    $ingredients: [String!]!,
    $instructions: [String!]!,
    $image: String
  ) {
    addRecipe(
      title: $title,
      category: $category,
      servings: $servings,
      cookingTime: $cookingTime,
      rating: $rating,
      ingredients: $ingredients,
      instructions: $instructions,
      image: $image
    ) {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($deleteRecipeId: ID) {
    deleteRecipe(id: $deleteRecipeId) {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`

export const ADD_INGREDIENT = gql`
  mutation AddIngredient($ingredient: String!) {
    addIngredient(ingredient: $ingredient) {
      ...IngredientDetails
    }
  }
  ${INGREDIENT_DETAILS}
`

export const DELETE_INGREDIENT = gql`
  mutation DeteleIngredient($deleteIngredientId: ID) {
    deleteIngredient(id: $deleteIngredientId) {
      ...IngredientDetails
    }
  }
  ${INGREDIENT_DETAILS}
`