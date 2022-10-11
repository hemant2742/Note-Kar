
import PushPinIcon from '@mui/icons-material/PushPin';
// import { DataContext } from '../../context/DataProvider';


const Pinnotes = ({state, removeFromNotes, removePin}) => {
    if(state.pinned_id){
      return (
      <div className="pinned">
        <h4>Pinned</h4>
        {state.notes_list.filter(n=>{ return n.id === state.pinned_id }).map((item,index)=>
        <p key={index} className="list-item" id="li">
          <span className="span1">{item.title} <button className="pin-button" onClick={e=>removePin(item.id)}><img src={PushPinIcon} alt="logo" width={28} height={35}></img></button></span> 
          <span className="span2">{item.input}</span>
          <button className="list-button" onClick={e=>removeFromNotes(index,item.id)}>delete</button>
        </p>
        )}
        <hr></hr>
      </div>
      );
    }
    else {
        return null;
    }
}



export default Pinnotes;