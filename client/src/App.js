import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navbar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import User from './components/User';
import { authenticate } from "./store/session";
import { fetchBoards } from "./store/board";
import { fetchLists } from "./store/list";
import { fetchCards } from "./store/card";
import SplashPage from "./components/SplashPage";
import HomePage from "./components/HomePage";
import SingleBoard from "./components/SingleBoard";

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      const user = await dispatch(authenticate());
      if (user) {
        await dispatch(fetchBoards());
        await dispatch(fetchLists());
        await dispatch(fetchCards());
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  const UserContainer = () => {
    return (
      <>
        <NavBar />
        <Switch>
          <ProtectedRoute path="/boards/:id" exact={true} render={(props) => <SingleBoard key={props.match.params.id} />} />
          {/* <SingleBoard />
          </ProtectedRoute> */}
          <Route path="/" exact={true}>
            {user ? <HomePage /> : <SplashPage />}
          </Route>
          {/* PLACE 404 ROUTE HERE */}
        </Switch>
      </>
    );
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/">
          <UserContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
