const initialState = {
  loading: false,
  items: [],
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "categories/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "categories/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "categories/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "category/remove/pending":
      return {
        ...state,
        loading: true,
      };
    case "category/remove/fulfilled":
      return {
        ...state,
        items: state.items.filter((category) => {
          return category._id !== action.payload;
        }),
      };
    case "category/add/pending":
      return {
        ...state,
        loading: true,
      };
    case "category/add/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case "category/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default categories;

export const loadAllCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "categories/fetch/pending" });

    try {
      const response = await fetch("/categories");
      const json = await response.json();

      dispatch({ type: "categories/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "categories/fetch/rejected", error: e.toString() });
    }
  };
};

export const removeCategory = (categoryId) => {
  return async (dispatch) => {
    dispatch({ type: "category/remove/pending" });

    try {
      await fetch(`category/${categoryId}`, {
        method: "DELETE",
      });
      await dispatch({
        type: "category/remove/fulfilled",
        payload: categoryId,
      });
    } catch (e) {
      await dispatch({ type: "category/remove/rejected" });
    }
  };
};

export const addCategory = (categoryName) => {
  return async (dispatch) => {
    dispatch({ type: "category/add/pending" });

    try {
      const response = await fetch("/category", {
        method: "POST",
        body: JSON.stringify({
          name: categoryName,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();

      dispatch({ type: "category/add/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "category/add/rejected", error: e.toString() });
    }
  };
};

export const selectAllCategories = (state) => state.categories.items;
