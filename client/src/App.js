import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cats,
    topscore:0,
    score:0
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
   
   
    
 

    cats.sort(() => Math.random() - 0.5);

    this.setState({ cats, score:   this.state.score +1 });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Disney's Famous Cats </Title>
        {this.state.cats.map(cat => (
          <CatCard
            removeFriend={this.removeFriend}
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
