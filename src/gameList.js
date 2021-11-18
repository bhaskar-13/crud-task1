 import  { Games } from "./games";
 import  EditIcon from '@mui/icons-material/Edit';
 import  DeleteIcon from '@mui/icons-material/Delete';
 import  IconButton from '@mui/material/IconButton';
 import  { useHistory } from "react-router-dom";
 export function GameList({games,setgames}) {

let history=useHistory();
 return (
      <section className="games-list">
      {games.map((mv,id) =><Games key={id}
        name={mv.gameName}
        rating={mv.rating}
        summary={mv.summary}
        pic={mv.poster} 
        id={id}
        editButton={<IconButton
                        onClick={()=>{
                        history.push("/games/edit/" +id);
                    }}
                        className="editbutton"
                        aria-label="editbutton"
                    >
                       <EditIcon/>
                      </IconButton>
                    }
         deleteButton={<IconButton
                        onClick={()=>{
                           const deleteindex=id;
                           const remainingGames=(games.filter((mv,idx)=>idx!==deleteindex));
                           setgames(remainingGames);
                        }}
                           className="deleteButton"
                           aria-label="deleteButton" 
                      >
                      <DeleteIcon/>
                      </IconButton>
                      }
     
                       />
        
                      )}
    </section>
  );
}
 




