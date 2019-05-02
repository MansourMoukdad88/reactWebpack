import React, {Component} from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    persons:[
      {id:"1", name:"A", age:22},
      {id:"2", name:"B", age:33},
      {id:"3", name:"C", age:44}
    ],
    showPerson: false
  }


  nameChangeHandler(event, id) {
    const personIndex = this.state.persons.findIndex((p)=> {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;

    const persons = [...this.state.persons]
          persons[personIndex] = person
    this.setState ({
      persons: persons
    })
  }

  deletePersonHandler(personIndex){
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  toggleNameHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson: !doesShow})
  }

  //------------
  render(){
    
    const style = {
      backgroundColor:"green",
      color:"white",
      font:"inherit",
      border: "1px solid blue",
      paddding:"8px",
      cursor:"pointer",
      ":hover" : {
        backgroundColor:"lightgreen",
        color: "black"
      }
    }


   let persons = null;
     if(this.state.showPerson) { 
     persons = (
      <div>
        {this.state.persons.map((person, index) =>{
         return <Person 
          click={()=>this.deletePersonHandler(index)}
          change={(event) => this.nameChangeHandler(event, person.id)}
          key={person.id}
          name={person.name}
          age={person.age}/>
        })}
      </div>
     )
     style.backgroundColor = "red"

   }

   const classes = [];

   if(this.state.persons.length <= 2) {
     classes.push("red")
   }
   if(this.state.persons.length <=1) {
     classes.push("bold");
   }

  //-----Still inside render ------
  return (
    <div className="App">
      <h1>I'm React App</h1>
      <p className={classes.join(" ")}>It's Realy Working</p>
      <button 
        onClick={this.toggleNameHandler}
        style={style}
        >Toggle Person</button>
          {persons}
    </div>
  );
  }
}

export default App;
