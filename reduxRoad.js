const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
}

const wagonReducer = (state = initialWagonState, action) => {
  switch (action.type) {
    case 'gather': {
      return {...state, supplies: state.supplies + 15, days: state.days + 1
      }
    }
    case 'travel': {
      return {...state, supplies: state.supplies - 20*action.payload, distance: state.distance + 10*action.payload, days: state.days + action.payload}
    }
    case 'tippedWagon': {
      return {...state, supplies: state.supplies - 30, days: state.days + 1}
    }
    default:
      return state;
  }

}

let wagon = wagonReducer(undefined, {});
console.log(wagon);

wagon = wagonReducer(wagon, {type: 'travel', payload: 1})
console.log(wagon);

wagon = wagonReducer(wagon, {type: 'gather'})
console.log(wagon);

wagon = wagonReducer(wagon, {type: 'tippedWagon'})
console.log(wagon);

wagon = wagonReducer(wagon, {type: 'travel', payload: 3})
console.log(wagon);
