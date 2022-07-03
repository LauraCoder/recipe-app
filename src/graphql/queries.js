import { gql } from '@apollo/client'
import { RECIPE_DETAILS, INGREDIENT_DETAILS } from './fragments'

export const GET_CATEGORIES = gql`
  query AllRecipes {
    allCategories {
      id
      title
      image
    }
  }
`

export const GET_RECIPES = gql`
  query AllRecipes {
    allRecipes {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`

export const GET_INCREDIENTS = gql`
  query AllIngredients {
    allIngredients {
      ...IngredientDetails
    }
  }
  ${INGREDIENT_DETAILS}
`

export const FIND_RECIPE = gql`
  query FindRecipe($title: String!) {
    findRecipe(title: $title) {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`

export const FILTER_RECIPES = gql`
  query FilterRecipes($servings: Int, $cookingTime: Int, $rating: Float) {
    filterRecipes(servings: $servings, cookingTime: $cookingTime, rating: $rating) {
      ...RecipeDetails
    }
  }
  ${RECIPE_DETAILS}
`