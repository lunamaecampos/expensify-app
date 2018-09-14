import { createStore } from 'redux';

///////

// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

/////////

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count } ) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});


const countReducer  = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: state.count = 0
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(()=>{
  console.log(store.getState());
});

// store.dispatch ({
//   type: 'INCREMENT',
//   incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 1 }))

store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(setCount({ count: 10}))

store.dispatch(resetCount());

// store.dispatch ({
//   type: 'INCREMENT'
// });
// store.dispatch (incrementCount());
// store.dispatch ({
//   type: 'RESET'
// });
//
// store.dispatch ({
//   type: 'DECREMENT',
//   decrementBy: 13
// });
//
// store.dispatch ({
//   type: 'SET',
//   count: 101
// })
