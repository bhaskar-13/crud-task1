import { useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';
 
 export function EditGames({games,setgames}) {
  const { id} = useParams();
  let game={};
  game=games[id];
  const history=useHistory();
  const [name, setName] = useState(game.gameName);
  const [image, setimage] = useState(game.poster);
  const [rating1, setrating] = useState(game.rating);
  const [summary1, setsummary] = useState(game.summary);
  const [trailer,settrailer]=useState(game.trailer);
 return(
  <div className="gameform">
   <TextField value={name} onChange={(ele) => setName(ele.target.value)} id="standard-basic" label="Enter Game Name" variant="standard" />
      <TextField value={image} onChange={(ele) => setimage(ele.target.value)} id="standard-basic" label="Enter pic url" variant="standard" />
      <TextField value={rating1} onChange={(ele) => setrating(ele.target.value)} id="standard-basic" label="Enter Game Rating" variant="standard" />
      <TextField value={summary1} onChange={(ele) => setsummary(ele.target.value)} id="standard-basic" label="Enter Game summary" variant="standard" />
      <TextField value={trailer} onChange={(ele) => settrailer(ele.target.value)} id="standard-basic" label="Enter trailer" variant="standard" />
  <Button onClick={() => {
     const updatedGame = { gameName: name, poster: image, rating: rating1, summary: summary1,trailer:trailer};
     const copyGames=[...games];
     copyGames[id]=updatedGame;
     setgames(copyGames);
     history.goBack("/games")
   
  }} variant="outlined">Save</Button>
</div>

 )
}



  
 



    


 
 

