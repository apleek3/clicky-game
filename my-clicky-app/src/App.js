import React, { Component } from 'react';
import './App.css';
import MattDamons from './MattDamons.json'
import Wrapper from './components/Wrapper'
import Navpills from './components/Navpills'
import Title from './components/Title'
import MattDamonCard from './components/MattDamonCard'

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

    selectMattDamon = name => {
        const findMattDamon = this.state.unselectedMattDamons.find(item => item.name === name);

        if(findMattDamon === undefined) {
            // NOT a new Matt Damon
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
                currentScore: 0,
                MattDamons: MattDamons,
                unselectedMattDamons: MattDamons
            });
        }
        else {
            // New Matt Damons
            const newMattDamons = this.state.unselectedMattDamons.filter(item => item.name !== name);
            
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
                    this.state.MattDamons.map(MattDamon => (
                        <MattDamonCard
                            id={MattDamon.id}
                            name={MattDamon.name}
                            image={MattDamon.image}
                            key={MattDamon.id}
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
