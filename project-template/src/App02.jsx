// This is a place holder for the initial application state.
const state = [


];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");



class MyComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary"><a href="/view03.html">Create Event +</a></button>
       <center><h1>Calendar View</h1></center> 
        
       <center>
         <img src="https://www.thewallworks.com/images/products/basic-calendar.JPG">
       </img>
       </center>
        
      </div>
  
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
