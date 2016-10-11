/**
 * Created by Egan on 10/11/2016.
 */

PlayersList = new Mongo.Collection('players');

if(Meteor.isClient){

console.log('Hello Client');

  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass': function(){
      let playerId = this._id;
      let selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    }
  });

  Template.leaderboard.events({
    'click  .player': function(){
      let playerId = this._id;
      Session.set('selectedPlayer', playerId);
      let selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    }
  });
}

if(Meteor.isServer){
  console.log("Hello Server");
}
