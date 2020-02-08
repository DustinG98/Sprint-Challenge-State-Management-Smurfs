1. What problem does the context API help solve?

    Simplify the way you manage state

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions have a type property and contains payload, and is dispatched to the reducer to update state. Reducers determine changes to the apps state. The store stores the applications state and is immutable. It's a single source of truth because the only  way to change the state is to dispatch an action, which will change the state in the reducer.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    The difference is Application state is accessable throughout the entire app, and can be changed from any component whether it be a parent or child. It's also a way to pass props from children to the parent. A good time to use Application state over Component state is when you want to change state in the child component, and display it in the parent component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk allows us to use async flow in redux. It allows the action creators to be a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

    I like context API because of it's simplicity, but I like redux because of it's organization. 
