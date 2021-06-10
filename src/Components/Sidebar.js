import React, { Component } from 'react';     /** Components in files: To do that, create a new file with a .js file extension and put the code inside it:
                                                  Note that the file must start by importing React (as before), and it has to end with the statement export default Car;.
                                              */
import image from '../Assets/foto-formal.jpeg';

class Sidebar extends Component { //The component's name must start with an upper case letter
  // The constructor function is where you initiate the component's properties.
  // Props are arguments passed into React components.
  // If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.
  // React Props are read-only! You will get an error if you try to change their value.


  /**                 REACT STATE
   * 
   * React components has a built-in state object.
   * The state object is where you store property values that belongs to the component.
   * When the state object changes, the component re-renders.
   * 
   * The state object can contain as many properties as you like
   * Refer to the state object anywhere in the component by using the this.state.propertyname syntax
   * 
   */

  /**                CHANGING THE STATE OBJECT
   * 
   * To change a value in the state object, use the this.setState() method.
   * When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).
   * 
   */
  constructor(props) {  //  If there is a constructor() function in your component, this function will be called when the component gets initiated. 
    super(props);

    this.state = props.sidebarData;   //  In React, component properties should be kept in an object called state. The state object is initialized in the constructor:
  }

  // If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets
  render() {  //this method returns HTML
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">{this.state.firstName} {this.state.lastName}</span>
            <span className="d-none d-lg-block">
              <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt="" />
            </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;



// reference: https://www.w3schools.com/react/react_lifecycle.asp

/**             LIFECYCLE OF COMPONENTS
 * Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.
 * The three phases are: Mounting, Updating, and Unmounting.
 */

/**     MOUNTING
 * Mounting means putting elements into the DOM.
 * React has four built-in methods that gets called, in this order, when mounting a component:
 *    constructor() : is called before anything else, when the component is initiated
      getDerivedStateFromProps() : is called right before rendering the element(s) in the DOM.
      render(): is required, and is the method that actual outputs HTML to the DOM.
      componentDidMount(): is called after the component is rendered.
 *  The render() method is required and will always be called, the others are optional and will be called if you define them.

Ejemplo de uso de componentDidMount(), el cual luego de 1 segundo de que se renderizó el documento, cambia una propiedad y hace que todo se renderize
 componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
 */



/**     ABOUT JSX
 * JSX produce “elementos” de React.
 * Esta curiosa sintaxis de etiquetas no es ni un string ni HTML.
 *
 */


/**   HTML TO JSX
 * https://magic.reactjs.net/htmltojsx.htm
 */

