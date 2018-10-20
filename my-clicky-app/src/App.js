import React, { Component } from "react"; //Imports react; more importantly the Component functionality
import "./App.css"; //imports our custom CSS
import MattDamons from "./MattDamons.json"; //imports all of our Matts
import Wrapper from "./components/Wrapper"; // imports our custom wrapper
import Navpills from "./components/Navpills"; // imports custom nav score pills
import Title from "./components/Title"; // adds the title component
import MattDamonCard from "./components/MattDamonCard"; //imports our major game component, the Matt card

class App extends Component {
  state = {
    //initial state of the component sets the scores, instructions, and current states based on our imports above.
    //Basically pulls our inputs down into our App
    message: "Don't click the same Damon twice!",
    topScore: 0,
    currentScore: 0,
    MattDamons: MattDamons,
    unselectedMattDamons: MattDamons
  };

  componentDidMount() {} //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). So sayeth the Docs

  // function for shuffling our Matt cards - React way!
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // function for comparing our selected versus unselected Matt Damons
  selectMattDamon = name => {
    const findMattDamon = this.state.unselectedMattDamons.find(
      item => item.name === name
    );

    if (findMattDamon === undefined) {
      // NOT a new Matt Damon
      this.setState({
        message: "INCORRECT!", //changes the state of the message if the 'if' is met
        topScore:
          this.state.currentScore > this.state.topScore // if else which sets the topScore higher if the currentScore gets higher!
            ? this.state.currentScore
            : this.state.topScore,
        currentScore: 0,
        MattDamons: MattDamons,
        unselectedMattDamons: MattDamons
      });
    } else {
      // New Matt Damons
      const newMattDamons = this.state.unselectedMattDamons.filter(
        //creates a new array based on all of the that passed our first search. New array will keep all the unselected matt damons; now 'selected'
        item => item.name !== name
      );

      this.setState({ //sets the new message and ups the score
        message: "CORRECT!",
        currentScore: this.state.currentScore + 1,
        MattDamons: MattDamons,
        unselectedMattDamons: newMattDamons
      });
    }

    this.shuffleArray(MattDamons); //shuffle the array to up the difficulty
  };

  render() {
    return (
      <Wrapper>
        <Navpills
          message={this.state.message}
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.MattDamons.map(MattDamon => (
          <MattDamonCard
            id={MattDamon.id}
            name={MattDamon.name}
            image={MattDamon.image}
            key={MattDamon.id}
            selectMattDamon={this.selectMattDamon}
            currentScore={this.state.currentScore}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
