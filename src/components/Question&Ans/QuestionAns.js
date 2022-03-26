import React from 'react';
import './QuestionAns.css'

const QuestionAns = () => {
  return (
    <div className='container  ' >
      <div className=" rex">
        <h1 className="p-5 text-center text-warning fw-bold">
          Questions and Answers
        </h1>

        <h2 className="py-3">Question 1: How React works?</h2>
      
        <p className="">React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code and one can use it to help build single-page applications and mobile apps, or to build complex apps if you utilize it with other libraries. React-based on three simple concepts (1.jsx(XML in JS) virtual dom, 2.Memoization, 3. Reconciliation during render cycles). JSX is an extension to JS that allows you to write React`h.('div', null, 'text') as text in a div like html inside your JSX code. Both create a virtual DOM object that can be reconciled with the actual DOM. Memoization is a technique by which you cache results of a function until certain properties change. This is used for handling side effects through (useEffect) and (useLayoutEffect) and costly calculations with useMemo and (useCallback) and state with (useState) and (useRef). When you mount a react component with , the first render cycle (mount phase) is started; all hooks are memoized and the initial DOM fragment is constructed inside document.body, directly followed by the layout phase in which useLayoutEffect side effects are applied. Whenever a property in the render tree changes, a new virtual DOM is constructed in the render phase, reconciled, then comes the layout phase again - until the unmount phase.</p>
        <h2 className="py-3">Question 2: Difference between props and state?</h2>
        <p className=""> <strong>Props</strong> : Data passed in from a parent component, props are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update. <br />
        <strong> State </strong>: This is data maintained inside a component and It is local or owned by that specific component. The component itself will update the state using the setState function and the difference is all about which component owns the data. State is owned locally and updated by the component itself but Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change. <br /> The state of a parent component can be passed a prop to the child. They are referencing the same value, but only the parent component can update it.</p>
        <h2 className="py-3 ">Question 3: How useState works?</h2>
        <p className="mb-5">useState is a Hook that allows you to have state variables in functional components and you can pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. There are two types of components in React: class and functional components.
        Class components are ES6 classes that extend from React Component and can have state and lifecycle methods. Functional components are functions that just accept arguments as the properties of the component and return valid JSX, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component. Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine. It’s especially useful for local component state, but larger projects might require additional state management solutions.</p>
      
      </div>
    </div>
  );
};

export default QuestionAns;