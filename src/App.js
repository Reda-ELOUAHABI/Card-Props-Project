import Card from "./components/Card";
import contact from "./contacts";
import "./style.scss";
function createCard(contact) {
  return (
    <Card
      id={contact.key}
      key={contact.key} //this is special for the unicity
      image={contact.image}
      name={contact.name}
      description={contact.description}
    />
  );
}

//we can use the the ES6 form , for the return of :
//return contact.map(createCard);
//As I did on Emojipedia project : [since we have only on statement on the return , we don't need to write the return statment]
//return contact.map(contact => <Card
//   id={contact.key}
//   key={contact.key} //this is special for the unicity
//   image={contact.image}
//   name={contact.name}
//   description={contact.description}
// />);
//also we can use the function directly like :
//return contact.map(function(contact){return <Card .../>});

export default function App() {
  return contact.map(createCard);
  // <div className="App">
  //   <Card
  // image = {contact[0].image}
  // name = {contact[0].name}
  // description = {contact[0].description}
  //  />
  //   <br />
  //   <Card
  //         image = {contact[1].image}
  //         name = {contact[1].name}
  //         description = {contact[1].description}
  //  />
  // </div>
}
