# REDUX-ROAD PROJECT 

## Redux Road
We’ve learned the core concepts of Redux. Now it’s game time.

In this project you will build an adventure game using reducers, state, and actions. The state will represent, well, the state of the game. It contains the player’s inventory, distance travelled, and time on the road. Each event in the game is represented as an action. Players can gather supplies, travel, and–if they play risky–sometimes tip over the wagon carrying their supplies.

# REDUX-LESSONS-INSTRUCTOR-ANDRES-R.-BUCHELI

## Usage:

* Creating a reducer function.

* A reducer, or reducer function, is a plain JavaScript function that defines how the current state and an action are used in combination to create the new state.

## There a few things about this reducer that are true for all reducers:
* It’s a plain JavaScript function
* It defines the application’s next state given a current state and a specific action
* It returns a default initial state if no action is provided
* It returns the current state if the action is not recognized

## There are two intermediate JavaScript syntaxes used here:
* We use the equals sign = to supply a default value for the state parameter.
* We use the spread operator (...) to copy the current state and any changed values into a new object, not the existing state argument. We’ll explain why in the next exercise.

* Initial state can be defined as an array and as an object.
* Reducers can be called with the following syntax:
```
let wagon = wagonReducer(undefined, {});
```

* After calling the reducer with the syntax showed above, we can create the actions when we call the reducer for different type of actions with the following syntax:
```
wagon = wagonReducer(wagon, {type: 'travel', payload: 1})

wagon = wagonReducer(wagon, {type: 'gather'})
```

