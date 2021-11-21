import './App.css';
import { Button,Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Footer />
      
    </div>
  );
}



function Header(){
  return(
    <div class="header-container">
    <header className="header">
    <img className="logo" src="https://startbootstrap.com/assets/img/sb-logo.svg" alt=" not found" />
    <h3>Sign up on Start Bootstrap</h3>
     <p>Join our community of designers and developers and manage your purchases, favorite themes and snippets, comments, and more!</p>
     <div class="btn">
    <Button variant="primary"><i class="fab fa-twitter"></i> Log in with Twitter</Button>
   <Button variant="info"><i class="fab fa-facebook-f"></i> Log in with Facebook</Button>
    <Button variant="danger"><i class="fab fa-google"></i> Log in with Google</Button>
    <Button variant="dark"><i class="fab fa-github"></i> Log in with Github</Button>
    </div>
    <hr className="h-line"></hr>

    </header>
    
    </div>
  );
}




function Login(){
  return(
    <div className="login-container">
    <Form className="form-container">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <div className="submit-btn">
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Remember password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </div>
  <p>This site is protected by reCAPTCHA and the Google <span class="p">Privacy Policy </span>and <span class="p">Terms of Service</span>apply.</p>
</Form>

</div>
  );
}




function Footer(){
  return(
    <div className="footer">
      New user? <a href="!#" >Create an account!</a>
    </div>
  );

}
export default App;
