import React, { Component } from 'react'; // adds react functionality - more importantly the ability to use components
import './App.css'; //imports out custom CSS
import MattDamons from './MattDamons.json' // Adds all the Matt Damons for our app. Including his Loki cameo.
import Wrapper from './components/Wrapper' // Adds our scoreboard component
import Navpills from './components/Navpills' // Adds our score tally bootstrap Nav Pills
import Title from './components/Title' // Place to bring in our Snazzy title
import MattDamonCard from './components/MattDamonCard' // Our main component - Matt Damon cards to manipulate

// App is a compilation of all our our components
class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        currentScore: 0,
        MattDamons: MattDamons,
        unselectedMattDamons: MattDamons
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectMattDamon = role => {
        const findMattDamon = this.state.unselectedMattDamons.find(item => item.role === role);

        if(findMattDamon === undefined) {
            // failure to select a new mattdamon
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                MattDamons: MattDamons,
                unselectedMattDamons: MattDamons
            });
        }
        else {
            // success to select a new mattdamon
            const newMattDamons = this.state.unselectedMattDamons.filter(item => item.role !== role);
            
            this.setState({ 
                message: "You guessed correctly!",
                currentScore: this.state.currentScore + 1,
                MattDamons: MattDamons,
                unselectedMattDamons: newMattDamons
            });
        }

        this.shuffleArray(MattDamons);
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
                {
                    this.state.MattDamons.map(mattdamon => (
                        <MattDamonCard
                            role={mattdamon.role}
                            image={mattdamon.image}
                            selectMattDamon={this.selectMattDamon} 
                            currentScore={this.state.currentScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;
