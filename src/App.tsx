import Button from "./components/Button";
import ListGroup from "./components/ListGroup"
function App() {

  let cities = ['Pune', 'Mumbai', 'Chennai', 'Kolkata', 'Bangalore'];
  let heading = "Cities"
  return (
    <div>
      <ListGroup cities={cities} heading={heading} />
      <Button color="info" onClick={() => console.log('clicked')}>My Button</Button>
    </div>
  )
}

export default App
