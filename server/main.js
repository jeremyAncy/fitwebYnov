import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

if(Meteor.isServer) {

  let nbView = 0;

  Meteor.methods ({
    addView : function () {
      this.nbView ++;
      return this.nbView;
    }
  });

  /*Meteor.publish('nbView', function(){
    return nbView;
  });*/

  Meteor.startup(() => {
    // code to run on server at startup
    console.log("run server");
  
    //console.log(window.socketPort);
  
    //distances statiques enregistrées :
    /*for(var i=10; i<16; i++) {
      var date = new Date('2018-01-'+ i +'T'+ i +':30:00');
      console.log(date.toString());
      Distances.insert({metres:Math.floor(Math.random() * 3000) + 1500, date:date});
    }*/
  
    //console.log(Distances.find());
  
  
  });
}


