import { gql } from '@apollo/client'

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