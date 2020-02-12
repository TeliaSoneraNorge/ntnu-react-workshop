import React from 'react';

/**
 * React: Build UIs, in a declarative, composable way. 
 * Declarative: Write what you want the machine to do - opposed to Imperative: Write how you want the machine to do it (mostly)
 * Why? Writing vanilla can work well for small applications, but as web apps grow more complex, the JS necessary to make it
 * run becomes very complex. 
 * 
 * React is easy to write, and does a lot of optimizations.
 * 
 * Now: basic introduction of three main concepts:
 * * Components
 * * Props
 * * JSX
 * 
 * Components: Reacts basic building block. Can be created in different ways - but conceptually, think about it as a function.
 * Takes in arguments -> calculates UI.
 * If the state of the application changes, the props changes, and the UI is recalculated and updated accordingly:
 */

 function foo() {
     // return [UI];
 }

 function BasicComponent() {
     return (
         <h1>UI!</h1>
     )
 }