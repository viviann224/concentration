import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import friends from "./friends.json";
import "./App.css";

//initalize nonstatic / statechanging variables
let statusmsg= "Click on an image but not the same one twice!!";
let points =0;
let topscore=0;

//creating a class where there are state changes to update the DOM
class App extends Component 
{
  //variables
  state = 
  {
    friends,    //info about each card from friends.json
    statusmsg:"Pick a card but not the same one twice!!",  //current status msgs for the user
    points:0,     //current points for the user
    topscore:0,    //the top score for the user's scession
    tempFriends:friends
  };

  removeFriend = id => 
  {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  /*shuffl fx to shuffle all the cards  in the game after each turn / card click*/
  shuffle = array => 
  {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
//findFriend fx creates a temp myFriend of the current and 
//checks the id to the json id (friends) to determine
// if game over (set tempFriend to friends) or continue (setting tempFriend to myFriend)
  findFriend = id =>
  { 
    const myFriend = this.state.tempFriends.find(item => item.id ==id);
    //if id is not found in the temp object myFriend, means id already selected
    //and restart the game
    if(myFriend === undefined)
    {
      this.setState({
        //tell user they are still going
        statusmsg: "You picked it already! Play again!",
        //topscore logic
        topscore: (this.state.points >this.state.topscore)? this.state.points: this.state.topscore,
        //update the current store back to 0 to start over
        points:0,
        //update the tempFriend = friends (back to original state)
        tempFriends:friends
      });
    }
    //if id is found in the temp obj myFriend go ahead and make a new obj and store everything but 
    //the current id and all previous old clicked id's into noNewFriends
    else
    {
      const noNewFriends = this.state.tempFriends.filter(item => item.id != id)
      this.setState(
      {
        statusmsg:"Good guess! Keep it up!",
        points:this.state.points+1,
        friends:friends,
        tempFriends: noNewFriends
      });

    }
    this.shuffle(friends);
   {/* const clickedfriends= friends.filter(myclickedfriend => myclickedfriend.id ===id);
       this.setState({statusmsg});
       this.setState({ points: (this.state.point+1) });
       this.setState({friends});}
  */}

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() 
  {
    return (
      <Wrapper>
      <NavBar 
        findFriend= {this.findFriend}
        statusmsg= {this.state.statusmsg}
        points = {this.state.points}
        topscore= {this.state.topscore} />
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle= {this.shuffle}
            findFriend = {this.findFriend}
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
