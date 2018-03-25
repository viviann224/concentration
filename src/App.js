import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

//initalize nonstatic / statechanging variables
let statusmsg= "Click on an image but not the same one twice!!";
let points =0;
let topscore=0;

//creating a class where there are state changes to update the DOM
class App extends Component 
{
  //
  state = 
  {
    friends,    //info about each card from friends.json
    statusmsg,  //current status msgs for the user
    points,     //current points for the user
    topscore    //the top score for the user's scession
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            isClicked={friend.isClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
