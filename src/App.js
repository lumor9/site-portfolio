import logo from './logo.svg';
import './App.css';
import { v4 } from 'uuid'
import fetch from 'isomorphic-fetch'
import { Component } from 'react';

/*
class AppClass extends Component{
  constructor(props){
    super(props);
    this.state = {
      colors: [
        {
          "id": "1",
          "title": "Klein Blue",
          "color": "#002FA7",
          "rating": "0"
        },
        {
          "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
          "title": "Tomato",
          "color": "#d10012",
          "rating": 2
        },
      ]
    };
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);

  }

  addColor(title, color){
    colors = [...this.state.colors, {title, color, id: v4(), rating: 0}];
    this.setState({colors});
  }

  rateColor(id, rating){
    colors =this.state.colors.map(color => 
      color.id == id ? {...color, rating} : color
    );
    this.setState({colors});
  }

  removeColor(id){
    colors = this.state.colors.filter( color => color.id!==id);
    this.setState({colors})
  }

  render(){
    const {addColor, removeColor, rateColor} = this;
    const {colors} = this.state;

    return (
      <div className='app'>
        <AddColorForm onNewColor={addColor} />
        <ColorList colors={colors}
        onRate={rateColor}
        onRemove={removeColor} />
      </div>
    )
  }
}  */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav-header"> 
          <li>Прив</li>
          <li>Обо мне</li>
          <li>Образование</li>
          <li>Достижение</li>
          <li>Проекты</li> 
        </nav>
      </header>
    </div>
  );
}

export default App;
