import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";

let score = 0;
let topscore = 0;
let clicked = false;

class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats,
    topscore:0,
    score:0,
    clicked,
  };

  randomImages = id => {
    
    // Set this.state.cats equal to the new cats images array

    let userClick = cats.filter(cat => cat.id ===id);
    this.setState({ score: score++ });

    // already clicked clicked=true
    if (userClick.clicked===true) {
      this.setState({ score: 0 });

    for (let i = 0; i < cats.length; i++) {
      cats.clicked = false;
    }
    this.setState({ cats, score, clicked });
  }
   
   else {
     userClick.clicked = true;
     //this.setState({ score: score++});
     
     
    cats.sort(() => Math.random() - 0.5);

    this.setState({ cats, score:   this.state.score +1 });

     //topscore

     if (score > topscore) {
      topscore = score;
      this.setState({ topscore });
    }

   }
    
 

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      
      <Wrapper>
        <Title>Disney's Famous Cats </Title> 
        <h1>score={this.state.score}</h1>
        <h1>topscore={this.state.topscore}</h1>
        {this.state.cats.map(cat => (
          <CatCard
            randomImages={this.randomImages}
            id={cat.id}
            key={cat.id}
            name={cat.name}
            image={cat.image}
          />
        ))}
        
      </Wrapper>
      
    );
  }
}

export default App;
