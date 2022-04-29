import { gql } from '@apollo/client'

export const ADD_RECIPE = gql`
  mutation AddRecipe($title: String!, $category: String!, $servings: Int!, $cookingTime: Int!, $rating: Float, $ingredients: [String!]!, $instructions: [String!]!, $image: String) {
    addRecipe(title: $title, category: $category, servings: $servings, cookingTime: $cookingTime, rating: $rating, ingredients: $ingredients, instructions: $instructions, image: $image) {
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
  }
`

export const DELETE_RECIPE = gql`
  mutation DeleteRecipe($deleteRecipeId: ID) {
    deleteRecipe(id: $deleteRecipeId) {
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
  }
`

export const ADD_INGREDIENT = gql`
  mutation AddIngredient($ingredient: String!) {
    addIngredient(ingredient: $ingredient) {
      ingredient
    }
  }
`

export const DELETE_INGREDIENT = gql`
  mutation DeteleIngredient($deleteIngredientId: ID) {
    deleteIngredient(id: $deleteIngredientId) {
      id
      ingredient
    }
  }
`