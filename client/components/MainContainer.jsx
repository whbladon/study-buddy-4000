import React, { Component, useState } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import UserProfile from "./UserProfile.jsx";
import UpdateUser from "./UpdateUser.jsx";
import CreateEvent from "./CreateEvent.jsx";

export default function Homepage() {


  

  let match = useRouteMatch();
  return (
    <div className="main_container">
      <p>main routing container</p>
      <Switch>
        side
        <Route path={`${match.path}/userpage`}>
          <UpdateUser />
        </Route>
        <Route path={`${match.path}/createevent`}>
          <CreateEvent />
        </Route>
        <Route path={match.path}>
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
}
