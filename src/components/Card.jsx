import "./styles.css";
import "../contacts";
import Avatar from "./avatar";
//import contact from "../contacts";

// function Para(contact){
//   return<p> {contact.key}</p>;

// }

// function MapKey(){
//    return contact.map(Para);
//  }
function Card(props) {
  return (
    <div className="test">
      <br />
      <Avatar image={props.image} />
      <h1> {props.name} </h1>
      <p> {props.id}</p>
      {/* <MapKey /> */}
      <p>{props.description}</p>
      <br />
    </div>
  );
}
export default Card;
