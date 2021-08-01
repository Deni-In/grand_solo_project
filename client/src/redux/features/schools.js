const initialState = {
  loading: false,
  items: [],
  editingSchool: {},
  comparingSpace: []
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
    case "school/remove-by-id/pending":
      return {
        ...state,
        loading: true,
      };
    case "school/remove-by-id/fulfilled":
      return {
        ...state,
        items: state.items.filter((school) => {
          return school._id !== action.payload;
        }),
      };
    case "school/add/pending":
      return {
        ...state,
        loading: true,
      };
    case "school/add/fulfilled":
      return {
        ...state,
        loading: false,
        items: [...state.items, action.payload],
      };
    case "school/add/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "schools/set-editing-school":
      return {
        ...state,
        editingSchool: action.payload,
      };
    case "school/edit/pending":
      return {
        ...state,
        loading: true,
      };
    case "school/edit/fulfilled":
      return {
        ...state,
        loading: false,
        items: state.items.map((school) => {
          if (school._id === action.payload.id) {
            return {
              ...school,
              ...action.payload.data,
            };
          }
          return school;
        }),
      };
    case "school/edit/rejected":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "set/patch/name":
      return {
        ...state,
        editingSchool: {
          name: action.payload,
        },
      };
    case "set/patch/id" :
      return {
        ...state,
        editingSchool: {
          _id: action.payload
        }
      }
    case "compare/school/add":
      return {
        ...state,
        comparingSpace: [
            ...state.comparingSpace,
            action.payload
        ]
      }
    case 'compare/school/remove':
      return {
        ...state,
        comparingSpace: state.comparingSpace.filter((school) => {
          return action.payload._id !== school._id
        })
      }
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
  return async (dispatch) => {
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

export const removeSchool = (id) => {
  return async (dispatch) => {
    dispatch({ type: "school/remove-by-id/pending" });
    try {
      await fetch(`/school/${id}`, {
        method: "DELETE",
      });
      await dispatch({ type: "school/remove-by-id/fulfilled", payload: id });
    } catch (e) {
      await dispatch({ type: "school/remove-by-id/rejected" });
    }
  };
};

export const addSchool = ({
  name,
  category,
  logo,
  rating,
  onlineOption,
  price,
  description,
  location,
  term,
}) => {
  return async (dispatch) => {
    dispatch({ type: "school/add/pending" });

    try {
      const response = await fetch("/school", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          category: category,
          logo: logo,
          rating: rating,
          onlineOption: onlineOption,
          price: price,
          description: description,
          location: location,
          term: term,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();

      dispatch({ type: "school/add/fulfilled", payload: data });
    } catch (e) {
      dispatch({ type: "school/add/rejected", error: e.toString() });
    }
  };
};

export const setEditingSchool = (school) => {
  return {
    type: "schools/set-editing-school",
    payload: school,
  };
};

export const editSchool = (id, data) => {
  return async (dispatch, getState) => {
    dispatch({ type: "school/edit/pending" });

    const { schools } = getState();

    try {
      await fetch(`/school/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      dispatch({ type: "school/edit/fulfilled", payload: {id, data} });
    } catch (e) {
      dispatch({ type: "school/edit/rejected", error: e.toString() });
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

export const selectEditingSchool = (state) => state.schools.editingSchool;

export const selectComparingSpace = (state) => state.schools.comparingSpace
