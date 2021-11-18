import { useParams } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Button from '@mui/material/Button';
import { useHistory} from "react-router";


export function GameDetais({games}) 
{ 
  const { id } = useParams();
  let game={};
  game=games[id];
  const history=useHistory();

  let styles = { color: game.rating < 8 ? "red " : "green", fontWeight: "bold" };
  return (
     <div className="movie-container1">
      <iframe width="100%" height="711" src={game.trailer} title="youtube" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <div className="movie-specs">
        <h1>{game.gameName}</h1>
        <h3 className="movierating" style={styles}>⭐{game.rating}</h3>
      </div>
      <p className="movie-summary">{game.summary}</p>
      {/* <Button variant="outlined">{KeyboardBackspaceIcon}</Button> */}
      <Button variant="outlined" startIcon={<KeyboardBackspaceIcon/>} onClick={()=>history.goBack()}>Back</Button>
    </div>
  );
}
