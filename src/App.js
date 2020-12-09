import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "./PokemonList";
import Game from "./Game";
import PokemonSupDetailView from "./PokemonSupDetailView";
import Header from "./Header.js";

export default function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>

        <Route path="/fight/:id">
          <Game />
        </Route>

        <Route path="/:id/:info">
          <PokemonSupDetailView />
        </Route>
      </Switch>
    </div>
  );
}
