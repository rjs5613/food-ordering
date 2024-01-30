# food-ordering

Web App using react

## How React Works

- **Virtual Dom**
  - Representation of Actual DOM
  - Its a javascript object not the actual dom
- **Reconciliation**
  - The process to identify diff between the old virtual dom and new virtual dom. which is used to render the affected elements.

- **Reconciliation Algorithm** : Also known as *ReactFiber*
  - New Algorithm introduced in React 16
  - Used to find the diff between existing virtual dom and new dom
  - Based on the diff affected components are rerendered.
- **React Strict Mode**
  - If we use `<StrinctMode>`, the components are rendered twice in development mode. This doesnt' happen in production mode.
  - This happens as React assumes that every component you write is a pure function and calling them twice should return the same JSX. If the function returns different JSX in different calls the app will behave unexpectedly in development mode and we might notice them and fix.
  - It also runs the effect hook twice. If we call any API in useEffect, the API will be called twice. This can help us in knowing if there are any resource cleanup needed.

## React Hooks

- Normal utility js functiona given by react
- Hooks should only be called from the top level of your React function
- Hooks must not be called from nested code (e.g., loops, conditions)
- Hooks may also be called at the top level from custom Hooks
- **useState()** :
  - Gives variable(s) that maintains state inside react component.
  - Definition syntax:

     ```javascript
     const [variable_name, setFunction] = useState(defaultValue);
     ```

  - *useState()* returns an array with 2 elements, 0-> variable and 1-> set function.
  - Other way to define:

    ```javascript
    const arr = useState([]);
    const variable_name = arr[0];
    const setFunction = arr[1];
    ```

  - *setFunction* name can be anything but cunvention is to use java type setter.
  - can't modify the variable directly.
  - We need to call the *setFunction* with new value
- **useEffect()**
  - It is called immediately after the component is rendered.
  - Mostly used to interact with things outside the react app like fetching data from third party.
    Syntax:

    ```javascript
    useEffect(() => {console.log();}, [arg1, arg2]);
    ```
  
  - if we pass empty array as argument to useEffect hook, it will run only for the first time when the componenet is rendered. It will not be invoked on rerender. Syntax: `useEffect(() => {console.log();}, []);`
  - If we pass arguments (non empty array), then it will run whenever value of any of the argument changes. Syntax: `useEffect(() => {console.log();}, ['name', 'id']);`
  - If we don't pass anything  this will keep on calling the useEffect in every render cycle. So if we are updating a state variable in useEffect hook, it will intiate the render cycle and the hook will be called in infinite loop. Syntax: `useEffect(() => {console.log();});`
  - Optionally, we can return funtion from the useEffect hook.
    - Syntax:

      ```javascript
            useEffect(()=>{
              //Logic to be applied after render (Resource Creation).
              return () => {
                //resource clean up code goes here
              }
            }, []);
      ```

    - The function which we return from inside of useEffect will be called whenver the useEffect is applied on the component again on next render.
    - If we want to cleanup any resource before next useEffect, we can write the cleanup in the function and return.
  