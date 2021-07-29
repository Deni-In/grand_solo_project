const initialState = {
  loading: false,
  items: [],
};

const schools = (state = initialState, action) => {
  switch (action.type) {
    case "schools/fetch/pending":
      return {
        ...state,
        loading: true,
      };
    case "schools/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "schools/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "schools/fetch-by-category/pending":
      return {
        ...state,
        loading: true,
      };
    case "schools/fetch-by-category/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case "schools/fetch-by-category/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default schools;

export const loadAllSchools = () => {
  return async (dispatch) => {
    dispatch({ type: "schools/fetch/pending" });

    try {
      const response = await fetch("/schools");
      const json = await response.json();

      dispatch({ type: "schools/fetch/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "schools/fetch/rejected", error: e.toString() });
    }
  };
};

export const loadSingleSchoolById = (id) => {
  return async (dispatch, getState) => {
    const { schools } = getState();

    if (schools.items.find((school) => school._id === id)) {
      return;
    }

    dispatch({ type: "schools/fetch-single/pending" });

    try {
      const resp = await fetch(`/school/${id}`);
      const school = await resp.json();

      dispatch({ type: "schools/fetch-single/fulfilled", payload: school });
    } catch (e) {
      dispatch({ type: "schools/fetch-single/rejected", error: e.toString() });
    }
  };
};

export const loadSchoolsByCategory = (categoryId) => {
  return async (dispatch, getState) => {
    const { schools } = getState();

    dispatch({ type: "schools/fetch-by-category/pending" });

    try {
      const resp = await fetch(`/${categoryId}/schools`);
      const schools = await resp.json();

      dispatch({
        type: "schools/fetch-by-category/fulfilled",
        payload: schools,
      });
    } catch (e) {
      dispatch({
        type: "schools/fetch-by-category/rejected",
        error: e.toString(),
      });
    }
  };
};

export const selectSchoolsLoading = (state) => state.schools.loading;

export const selectAllSchools = (state) => state.schools.items;

export const selectSingleSchool = (schoolId) => (state) => {
  return state.schools.items.find((school) => school._id === schoolId);
};

export const selectSchoolByCategory = (categoryId) => (state) => {
  return state.schools.items.filter((school) => school.category === categoryId);
};
