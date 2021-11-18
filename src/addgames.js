import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  { useHistory } from "react-router-dom";

  export function AddGames({ games,setgames} ) {
  const [name, setName] = useState("");
  const [image, setimage] = useState("");
  const [rating1, setrating] = useState("");
  const [summary1, setsummary] = useState("");
  const [trailer,settrailer]=useState("");
  const history=useHistory();

  return (
      <div className="gameform">
      <TextField value={name} onChange={(ele) => setName(ele.target.value)} id="standard-basic" label="Enter Game Name" variant="standard" />
      <TextField value={image} onChange={(ele) => setimage(ele.target.value)} id="standard-basic" label="Enter pic url" variant="standard" />
      <TextField value={rating1} onChange={(ele) => setrating(ele.target.value)} id="standard-basic" label="Enter Game Rating" variant="standard" />
      <TextField value={summary1} onChange={(ele) => setsummary(ele.target.value)} id="standard-basic" label="Enter Game summary" variant="standard" />
      <TextField value={trailer} onChange={(ele) => settrailer(ele.target.value)} id="standard-basic" label="Enter trailer" variant="standard" />
      <Button onClick={() => {
        const newGame = { gameName: name, poster: image, rating: rating1, summary: summary1,trailer:trailer};
        setgames([...games,newGame]);
        history.goBack("/games");    
                     
      }} variant="outlined">Add Movies</Button>
    </div>
  );
}
