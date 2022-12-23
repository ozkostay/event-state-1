// import Toolbar from './components/Toolbar';
import './App.css';

function App() {
  
  const animals = [
  { id: 1, animal: "Dog" },
  { id: 2, animal: "Bird" },
  { id: 3, animal: "Cat" },
  { id: 4, animal: "Mouse" },
  { id: 5, animal: "Horse" }
  ];
  
  function onClicker(ee) {
    let ccc = Math.random();
    console.log('aaa', ccc);
  }

  const renderAnimals = animals.map(item => (
    <button onClick={onClicker}>{item.animal}</button>
  ));

  return <ul>{renderAnimals}</ul>;
  
}

export default App;
