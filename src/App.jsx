import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Zone from "./pages/Zone";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return(
  <>
  <div>

    <Nav/>
    {/* <Switch>
          <Route path="/Zone">
            <Zone />
          </Route>
          <Route path="/">
            <Home />
          </Route>
    </Switch> */}
    <Home/>
    {/* <Zone/> */}
    <Footer/>
 
  </div>
  </>
  )
}

export default App;