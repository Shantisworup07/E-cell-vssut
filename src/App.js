import Navbar from './Navbar.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create.js';
import Contact from './Contact.js';
import BlogDetails from './BlogDetails.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content" >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route>
              <Contact />
            </Route>
            <Route>
              <BlogDetails path="/blogs/:id" />
            </Route>
  
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;