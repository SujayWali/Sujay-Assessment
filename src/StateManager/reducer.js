export const initialState = {
  missionData: [],
  baseUrl: "https://api.spaceXdata.com/v3/launches?limit=100",
  filters: JSON.parse(localStorage.getItem("filters"))
    ? JSON.parse(localStorage.getItem("filters"))
    : [0, 0, 0], //[year, launch, landing],
  url: localStorage.getItem("url")
    ? localStorage.getItem("url")
    : "https://api.spaceXdata.com/v3/launches?limit=100",
};
export const actionTypes = {
  SET_URL: "SET_URL",
  SET_MISSION_DATA: "SET_MISSION_DATA",
  SET_FILTERS: "SET_FILTERS",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_URL:
      localStorage.setItem("url", action.url);
      return {
        ...state,
        url: action.url,
      };
    case actionTypes.SET_MISSION_DATA:
      return {
        ...state,
        missionData: action.missionData,
      };
    case actionTypes.SET_FILTERS:
      localStorage.setItem("filters", JSON.stringify(action.filters));
      return {
        ...state,
        filters: action.filters,
      };
    default:
      return state;
  }
};

export default reducer;
