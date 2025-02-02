# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by improperly using the `useEffect` hook.  The `bug.js` file contains a component that updates its state within the `useEffect` hook without any dependency array condition, leading to an infinite render loop. The `bugSolution.js` shows the corrected version.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the browser console; you'll see a warning about too many re-renders in the `bug.js` example.

## Solution

The solution involves adding a dependency array to the `useEffect` hook.  This array specifies which values the effect should depend on. If the values in the array do not change between renders, the effect will only run once after the initial render. See the corrected code in `bugSolution.js`.