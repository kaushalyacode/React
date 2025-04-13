# Learn React Practical
## L0 : Create React App

## 📦 Create the App

To create this project, run the following command:
```bash
npm create vite@latest pegusas -- --template react
```

### 🔍 Command Breakdown
- npm create vite@latest: npm create is similar to npm init, but it's used for scaffolding a project using a specific starter/template tool.

- vite@latest ensures you're using the latest version of the Vite project creation tool.

  This will download and run the latest Vite project scaffolder.

- pegusas: Name of the project directory that will be created.

- --: Passes the next flags directly to the Vite CLI.

- --template react: tells Vite to use the React template, so it sets up a React-based project (including React, ReactDOM, and default boilerplate).

### What is Vite

> Vite (French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

   - A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR).

   - A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### Vite is Build tool.
So what is build tools generaly does.

A build tool like Vite helps developers transform and optimize their source code into something a browser can understand and run efficiently.

🛠️ What a Build Tool Typically Does:
1. Transpilation
  Converts newer JavaScript (ES6+) or TypeScript into older JavaScript that all browsers can understand.
  Example: Turns let, const, or arrow functions into compatible code.

2. Bundling
  Combines all your modules (import/export files) into one or a few files.
  This reduces the number of requests the browser has to make (faster loading!).

3. Minification
  Removes whitespace, comments, and shortens variable names to make the file size smaller.
  This helps improve page load speed.

4. Hot Module Replacement (HMR)
  While you're developing, a build tool like Vite can update modules in the browser without a full reload, making development much faster.

5. Asset Optimization
  Compresses images, optimizes fonts, and handles stylesheets (like Sass/SCSS or PostCSS).  
  Can also inline small assets directly into your JavaScript or CSS.

6. Environment Handling
  Supports different builds for development (with debugging) and production (optimized).
  You can use .env files for setting variables.

7. Code Splitting
   Breaks your app into smaller chunks so that only necessary code is loaded when needed.

   ### Next Steps
    ```
      cd pegusas
      npm install
      npm run dev```

## [L1 : 📁 Reference Folder Structures](https://github.com/kaushalyacode/React/tree/Create-Folder-Structure)

Here are some great repositories that demonstrate advanced React project folder structures:

- 🔗 [React JS Advance Folder Structure by ahsan-chy](https://github.com/ahsan-chy/React-JS-Advance-Folder-Structure/)
- 🔗 [React Folder Structure by duthanhduoc](https://github.com/duthanhduoc/React-Folder-Structure/)
- 🔗 [React Folder Structure by WebDevSimplified](https://github.com/WebDevSimplified/react-folder-structure/)
- 🔗 [React folder structure vedio](https://www.youtube.com/watch?v=UUga4-z7b6s)

## L3 : Class Component Life Cycle Methods

### Phases    
    
  Mounting - When the instance of component is being created and inserted into the DOM.  
  Updating - When the component is being re-rendered as a result of changes to either its props or state.  
  Unmounting - When the component is being removed from the DOM.  
  Error-Handling - When there is an error during rendering, in a lifecycle method, or in the constructor of any child component.  

### Methods
  **Mounting**  
  
   ***1.constructor(props)*** 
                - When new component created  
                - Initialize state  
                - Binding event handlers to class instance  
                - Do not cause side effects : Api calls  
                - have to call super(props) method.this will call base class constructor  
                - until super is called, this.props will not be available  
                - this is the only place where you can assign this.state  
    ***2.static getDerivedStateFromProps(props, state)***   
                - this is rarely used method  
                - when the state of the component is depends on changes in props over time  
                - set the state  
                - since this is static method, you cannot use this keyword. so no this.setState.Have to return new state with new object  
                - Dont cause side effects  
                - get called befor render method  
                - if we recieve prop and we want to update state based on that prop, befor render method this is getting called  
                - return null if you dont want to update state  
                - can check state and props value befor returning new state  
      ***3.render()***  
                - this is the only required method in class component  
                - read this.props and this.state rerturn jsx which describe the UI  
                - do not cause side effects, state changes, interact with dom  
                - this has all child components, so childrens life cycle methods will be called after this.  
      ***4.componentDidMount()***  
                -  only once get called in life cycle  
                -  invoked immediately after a component and all its children components have been rendered to the DOM  
                -  Can cause side effects : Interact with DOM or Peform API calls  
   
  **Updating**  

    
  ***1.static getDerivedStateFromProps(props, state)***  
              - getting called every time componenet get rerendered  
  ***2.shouldComponentUpdate(nextProps ,nextState)***  
            - recieved updated props and state
            - Performance optimization
            - dictate if component should rendered or not , when prop state change
            - compare existing props and state with next values
            - return false for stop render
            - else return true
            - Rarely used
            - Do not cause side effects
            - Do not call seStates
            
   ***3.render()***  
   ***4.getSnapshotBeforeUpdate(prevProps, prevState)***
            -  Rarely used  
            -  Called right before changes  from virtusal DOM are to be refleced in the DOM.  
            -  Capture some information from the DOM.  
            -  Ex: Read scroll position and after update , with some calculation maintain same scroll position  
            -  return null or value.if value , its passed to next method as third parameter.  
            -  as i undestood, only way to use this value is as third param of componentdidupdate.  
    ***5.componentDidUpdate(prevProp, prevState, snapshot)***  
            - after render is finished in rerendered cycle  
            - accept prevoous state, props and returnd value from getsnapshotbeforupdate method  
            - call only once in each rerender cycle  
            - can make side effects.Beofr that we can do previous and current props and state values.  
    
  **Unmounting**  
  
  ***1.componentWillUnmount()***  
            - method is invoked immediately befor component is unmount or destroy.  
            - perform cleanup tasks  such as canceling any network requests, removing event handlers, cancelling any subscriptions and also invalidating timers such as settimeout or setinterval  
            - don't set state here   

  **Error-Handling**  
  
   ***1.static getDerivedStateFromError()***  
   ***2.componentDidCatch()***  
