import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Profile from './About';
// import axios from 'axios';

class App extends React.Component {
 


  render() {
    
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
              <Route path="/profile"
              element={<Profile/>} />
          </Routes>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
