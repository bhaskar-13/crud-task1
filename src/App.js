import './App.css';
import { GameList } from './gameList';
import { Switch, Route, Link,Redirect} from "react-router-dom";
import { GameDetais } from './gamedetails';
import { AddGames } from './addgames';
import {EditGames} from "./editGames";
import { useState } from 'react';


function App() {

  const intialGames=[
    {
     
      gameName: "Minecraft",
      poster: "https://play-lh.googleusercontent.com/yAtZnNL-9Eb5VYSsCaOC7KAsOVIJcY8mpKa0MoF-0HCL6b0OrFcBizURHywpuip-D6Y=w412-h220-rw",
     rating: 9,
     summary: "Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus Notch Persson in the Java programming language",
     trailer: "https://www.youtube.com/embed/MmB9b5njVbA"
    },
    {
    
      gameName: "Grand Theft",
      poster: "https://pbs.twimg.com/media/Acq8WQKCQAEd96M.png",
     rating: 8,
     summary: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall.",
     trailer: "https://www.youtube.com/embed/QkkoHAzjnUs"
    },
    {
   
      gameName: "Fortite ",
      poster: "https://cdn1.epicgames.com/salesEvent/salesEvent/18BR_S18_Launcher_EGS_Blade_2560x1440_2560x1440-da6f6a137b90887357222b762c7675a1",
     rating: 8,
     summary: "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: ",
     trailer: "https://www.youtube.com/embed/2lBFoxLvYHs"
    },
    {
    
      gameName: "League of Legends",
      poster: "https://cdn1.dotesports.com/wp-content/uploads/2019/09/12195522/league-of-legends.jpg",
     rating: 6.5,
     summary: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.",
     trailer: "https://www.youtube.com/embed/rt_5-8OPiEA"
    },
    {
    
      gameName: "Need For Speed ",
      poster: "https://steamcdn-a.akamaihd.net/steam/apps/1262540/capsule_616x353.jpg?t=1598621991",
     rating: 7.3,
     summary: "Need for Speed is a racing video game franchise published by Electronic Arts and currently developed by Criterion Games, the developers of Burnout. The series generally centers around illicit street racing and tasks players to complete various types of races while evading the local law enforcement in police pursuits.",
     trailer: "https://www.youtube.com/embed/9ewiJJe_nYI"
    }
   ]
   
  const [games,setgames]=useState(intialGames);
  return (
    <div className="App">
    <nav>
    <div className="nav">
    <Link to="/games">Games</Link>
    <Link to="/addgames">Add Games</Link>
    </div>
    </nav>
    <Switch>
    <Route  path="games/:id">
     <GameDetais games={games}/> 
    </Route>
    
    <Route exact path="/games/edit/:id">
    <EditGames games={games} setgames={setgames} />
    </Route>
   
    <Route exact path="/games">
    <GameList games={games} setgames={setgames}/>
    </Route>
    <Route exact path="/addgames">
    <AddGames games={games} setgames={setgames} />
    </Route>

      <Route exact path="">
     <Redirect to="/games">
      </Redirect>
      <GameList games={games} setgames={setgames}/> 
    </Route>    
    </Switch>
    </div>
);
}

export default App;


     



 
