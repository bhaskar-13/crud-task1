import { useState } from "react";
import { Likecounter } from "./counter";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
export function Games({ name, rating, summary, pic,id,deleteButton,editButton}) {
  let [show, setshow] = useState(true);
  let history=useHistory();
  let styles = { color: rating < 8 ? "red " : "green", fontWeight: "bold" };
  let displaydescp = { display: show ? "block" : "none" };
  return (
     <Card  className="game-container">
      <img className="game-poster" src={pic} alt={name} />
      <CardContent>
      <div className="game-specs">
        <h1 className="game-name">{name}
        <IconButton  onClick={()=>history.push('/games/' +id)} aria-label="more-info" color="primary">
        {<InfoIcon/>}
      </IconButton>
        <IconButton  onClick={() => setshow(!show)} aria-label="hide-show" color="primary">
        {show ?<ExpandLessIcon/> :<ExpandMoreIcon/>}
      </IconButton>
        </h1>
        <p className="gamerating" style={styles}>⭐{rating}</p>
      </div>
      <p style={displaydescp} className="game-summary">{summary}</p>
      <CardActions>
      <Likecounter />
      {deleteButton}
      {editButton}
      </CardActions>
      </CardContent>
    </Card>
  );
}
