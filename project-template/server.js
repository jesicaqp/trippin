const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;


const eventFieldType = {
  // id: 'required',
  name: 'required',
  location: 'required',
  date: 'required',
  description: 'optional',
  attendees: 'optional',
};

function validateEvent(event) {
  for (const field in eventFieldType) {
    if(eventFieldType.hasOwnProperty(field)){
         const type = eventFieldType[field];
          if (!type) {
            delete event[field];
          } else if (type === 'required' && !event[field]) {
            return `${field} is required.`;
          }
    }
   }
  return null;
}

app.get('/api/events', (req, res) => {
  db.collection('events').find().toArray().then(events => {
    const metadata = { total_count: events.length };
    res.json({ success: true, _metadata: metadata, records: events })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ success:false, message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/events', (req, res) => {
  console.log(req)
  const newEvent = req.body;

  newEvent.date = new Date();

  const err = validateEvent(newEvent);
  if (err) {
    res.status(422).json({ message: `Invalid request: ${err}` });
    return;
  }

  db.collection('events').insertOne(newEvent).then(result =>

    db.collection('events').find({ _id: result.insertedId }).limit(1).next()
  ).then(newEvent => {
    res.json(newEvent);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

/*
const userName = {
  name: 'required', 
  email: 'required',
  username: 'required',
};

function validateUser(name) {
  for (const field in userName) {
    if(userName.hasOwnProperty(field)){
         const type = userName[field];
          if (!type) {
            delete name[field];
          } else if (type === 'required' && !name[field]) {
            return `${field} is required.`;
          }
    }
   }
  return null;
}

app.get('/api/username', (req, res) => {
  db.collection('username').find().toArray().then(username => {
    const metadata = { total_count: username.length };
    res.json({ success: true, _metadata: metadata, records: username })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ success:false, message: `Internal Server Error: ${error}` });
  });
});
*/

let db
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('eventsTracker');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});

