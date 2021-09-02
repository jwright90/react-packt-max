# React - The Complete Guide
## (includes Hooks, React Router, and Redux)

Follow along Packt React Tutorial

## Notes @ 2nd Sep 21
* Note that we only point at a function when using any kind of event handler, we don't execute it. If we put parenthesis then it will execute when the JSX code is returned. If we exclude parenthesis then it only executes on the event.

* React calls JSX elements (they are functions), executes the code in there, then executs the code of the children JSX elements. It then evaluates the overall result and displays it on the DOM.

* If you have a variable in your JSX functions and the variable changes, React doesn't care. It only runs through the JSX function once. Even if it was ran twice, it would reinitialize the variable each time.

## State
* We need state to change variables within React components.
* Import { useState } from React to use the useState method.
* Set a const array variable to useState(props.item);



## Notes @ 1st Sep 21
* React - Written in declarative language (unlikely just JS which is imperative)
* A component in React is just a function.
* Reach 'Passing Data via "Props"' @ 13:35
* Learned how constants defined within a React function can be re-used in the JSX (HTML-like) code using curly braces.

### Props
* Data is received into the component from outside of the function.

### Wrapper Components
* Created 'wrapper' component by using {props.children}, then using 'className' as a prop of the wrapper.