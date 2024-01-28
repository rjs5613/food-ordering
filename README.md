# food-ordering

Web App using react

## How React Works

- **Virtual Dom**
  - Representation of Actual DOM
  - Its a javascript object not the actual dom

- **Reconciliation Algorithm** : Also known as **ReactFiber**
  - New Algorithm introduced in React 16
  - Used to find the diff between existing virtual dom and new dom
  - Baed on the diff affected components are rerendered.

## React Hooks

- Normal utility js functiona given by react
- **useState()** : Give variable that maintains state inside react component
  - Definition syntax:

     ```javascript
     const [variable_name, setFunction] = useState(defaultValue);
     ```

  - useState() returns an array with 2 elements, 0-> variable and 1-> set function.
  - Other way to define:

    ```javascript
    const arr = useState([]);
    const variable_name = arr[0];
    const setFunction = arr[1];
    ```

  - setFunction name can be anything but cunvention is to use java type setter.
  - can't modify the variable directly.
  - We need to call the setFunction with new value
- **useEffect()** --  are most used hooks
  - It is called immediately after the component is rendered.
  - Syntax:

    ```javascript
    useEffect(() => {console.log();}, [arg1, arg2]);
    ```
