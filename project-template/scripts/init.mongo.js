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

db = new Mongo().getDB('eventsTracker');

db.events.remove({});


db.events.insert([
{
	"name" : "Trip to the cape", 
	"location" : "Cape Cod, Massachusetts.", 
	"eventdate" : "03/25/2019", 
	"description" : "A week of fun and relaxation for students before the second round of midterms. We will be celebrating the start of spring and the start of warmer temperatures and sunny skies.", 
	"attendees" : "Aibhlin Fitzpatrick,Jesica Quinones, Arushi Ahmed.",
},

{ 
	"name" : "Trip to Disney World", 
	"location" : "Orlando, Florida.", 
	"eventdate" : "07/04/2019", 
	"description" : "Visiting the happiest place on 4th of July before starting my new job in New York City.", 
	"attendees" : "Aibhlin Fitzpatrick, Jesica Quinones, Arushi Ahmed.",
},

]);
