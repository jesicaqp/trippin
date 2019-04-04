db = new Mongo().getDB('useraccounts');

db.username.remove({});


db.username.insert([
{ "_id" : ObjectId("5ca3b3c26c36fb05b53625a3"), 
	"name" : { "first" : "Arushi", "last" : "Ahmed" }, 
	"username" : "arushiahmed", 
	"email" : "aaahmed@umass.edu" 
},

{ "_id" : ObjectId("5ca3b4096c36fb05b53625a4"), 
	"name" : { "first" : "Aibhlin", "last" : "Fitzpatrick" }, 
	"username" : "aibhlinfitzpatrick", 
	"email" : "afitzpatrick@umass.edu" 
},

{ "_id" : ObjectId("5ca3b4416c36fb05b53625a5"), 
	"name" : { "first" : "Jesica", "last" : "Quinones" }, 
	"username" : "jesicaquinones", 
	"email" : "jesicaquinon@umass.edu" 
},

]);