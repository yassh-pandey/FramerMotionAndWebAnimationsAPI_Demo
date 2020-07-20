import React, {useState} from 'react';
import './App.css';
import {Switch, Route, useLocation} from "react-router-dom"
import {AnimatePresence, motion} from 'framer-motion'
import Bread from './components/Bread';
import Sauce from './components/Sauce';
import Topping from './components/Topping';
import Extra from './components/Extra';
import Pay from './components/Pay';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  const [bread, setBread] = useState("");
  const location = useLocation();
  const [displayRoutes, setDisplayRoutes] = useState(false);
  return (
    <div className="App"
    >
      <Header setDisplayRoutes={setDisplayRoutes}/>
      {
        displayRoutes
        ?
        (
          <>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route path={["/breads", "/bread"]}>
                  <Bread bread={bread} setBread={setBread}/>
                </Route>
                <Route path={["/sauces", "/sauce"]}>
                  <Sauce />
                </Route>
                <Route path={["/toppings", "/topping"]}>
                  <Topping />
                </Route>
                <Route path={["/extras", "/extra"]}>
                  <Extra />
                </Route>
                <Route path={["/pay"]}>
                  <Pay />
                </Route>
                <Route path={["/home", "/"]}>
                  <Home />
                </Route>
              </Switch>
            </AnimatePresence>
          </>
        )
        :
        null
      }
    </div>
  );
}

export default App;
