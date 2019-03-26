// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");
var contentNode2 = document.getElementById("signForm");

class MyComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
         <p>Please fill in this form to create an account.</p>
      </div>
    );
  }
}

class SignForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
          <div class="container">
          
          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" />

          <label for="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" />

          <div class="clearfix">
           <button><a href="/view02.html">Sign Up</a></button>
           <button><a href="/view01.html">Cancel</a></button>
          </div>
        </div>
      </form>
    );
  }
}

class Parent extends React.Component {
    constructor() {
    super();
  }
   getInitialState()
   {
     return {signup:false,login:true}
   }
    switch(word)
    {
      let signup,login;
      if(word == "signup"){signup = true;login = false;}
      else{login = true; signup = false;}
      return this.setState({login:login,signup:signup})
    }

    render(){
      return (
         <div>
            <div id="buttons">
            <p id="signupButton" onClick={this.switch.bind(null,"signup")} className={this.state.signup}>Sign In</p>
            <p id="loginButton" onClick={this.switch.bind(null,"login")} className={this.state.login}>Login</p>
            </div>
            {this.state.signup?<Signup />:null}
            {this.state.login?<Login />:null}
          </div>
      );
    }
  }

// This renders the JSX component inside the content node:
ReactDOM.render(<MyComponent />, contentNode);
ReactDOM.render(<SignForm />, contentNode2);
