// Get all of our friend data
var cse120data = require('../cse120data.json');
var cse170data = require('../cse170data.json');
var cse130data = require('../cse130data.json');
var cogs187adata = require('../cogs187adata.json');
var mydata = require('../myGroups.json');

exports.view = function(req, res){
// from app.js 
// app.get('/myclass/:className/:groupID/:grouptype/removeGroup',removeGroup.view);
     console.log(req.params);

     console.log("DEBUG ------ Show the groupid!");
     console.log( req.params.groupID);

// group_person.id
// group_online.id
     console.log("DEBUG ------ Show the data! before pop!");
     console.log (mydata);
     
     /* Search group_person with id */
     for(var i=0; i<mydata.group_person.length; i++) {
      console.log("DEBUG ----- inside For group_person");
        if(req.params.groupID == mydata.group_person[i].id) {
          console.log("DEBUG ----- groupID?");
          console.log(mydata.group_person[i].id);
          var name = mydata.group_person[i].name;
          mydata.group_person.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
     } // end of for loop

     /* Search group_online with id */
     for(var i=0; i<mydata.group_online.length; i++) {
      console.log("DEBUG ----- inside For group_online");
        if(req.params.groupID == mydata.group_online[i].id) {
          console.log("DEBUG ----- groupID?");
          console.log(mydata.group_online[i].id);
          var name = mydata.group_online[i].name;
          mydata.group_online.splice(i, 1);
          console.log("DEBUG ----- popped!");
        }
     } // end of for loop

     console.log("DEBUG ------ Show the data! after pop!");
     console.log (mydata);


     console.log("DEBUG ------ before rendering, somewhere ");

     res.render('removeGroup', {'groupName': name});
};