export function reducer(state = { vehicles: [], visibleModal: false, visibleVehicle: null }, action) {
  switch (action.type) {
    case 'SET_VEHICLES':
      return { ...state, vehicles: action.data };
    case 'SET_MODAL_VISIBILITY':
      return { ...state, visibleModal: action.data };
    case 'SET_VISIBLE_VEHICLE':
      return { ...state, visibleVehicle: action.data };
    default:
      return state;
  }
}
