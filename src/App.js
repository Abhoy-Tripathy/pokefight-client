import React, { useEffect, useContext } from "react";
import "./App.css";
import { GameContext } from "./GameContext";
import { Switch, Route, useHistory } from "react-router-dom";
import PokemonList from "./PokemonList";
import Game from "./Game";
import PokemonSupDetailView from "./PokemonSupDetailView";

import Leaderboard from "./Leaderboard";

export default function App() {
  const { updateGameText } = useContext(GameContext);
  const history = useHistory();
  
  useEffect(() => {
  return history.listen((location) => {
    updateGameText("reset")
  })
}, [history, updateGameText])

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>

        <Route path="/fight/:id">
          <Game />
        </Route>

        <Route path="/leaderboard">
          <Leaderboard />
        </Route>

        <Route path="/:id/:info">
          <PokemonSupDetailView />
        </Route>
      </Switch>
    </div>
  );
}
