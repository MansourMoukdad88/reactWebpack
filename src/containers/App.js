import React, {Component} from 'react';
import Persons from '../components/Persons/Persons'
import classes from'./App.css';
import Cockpit from '../components/Cockpit/Cockpit'

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
    
   let persons = null;
     if(this.state.showPerson) { 
      persons = <Persons 
          persons={this.state.persons}
          click={this.deletePersonHandler.bind(this)}
          change={this.nameChangeHandler.bind(this)}
        />
   }

  

  //-----Still inside render ------
  return (
    <div className={classes.App}>
      <Cockpit 
        persons={this.state.persons}
        showPerson={this.state.showPerson} 
        click={this.toggleNameHandler}
        />
          {persons}
    </div>
  );
  }
}

export default App;
