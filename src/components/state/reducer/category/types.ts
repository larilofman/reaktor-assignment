export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY';

export enum Category {
    Gloves = "Gloves",
    Facemasks = "Facemasks",
    Beanies = "Beanies"
}

export type State = {
    selectedCategory: Category | undefined,
    allCategories: Category[]
}

