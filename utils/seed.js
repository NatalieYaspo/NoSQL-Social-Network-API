const connection = require('../config/connection');
const { Thought, User } = require('../models');
// const { getUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
      await connection.dropCollection('thoughts');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }

  const usernames = [
    {
      username: 'Natalie1234',
      email: 'natalie1234@gmail.com',
      thoughts: ['Umm...What?'],
      friends: [ 'Westley', 'Solenn' ]
    },
    {
      username: 'ZDuncan9876',
      email: 'ZDuncan9876@gmail.com',
      thoughts: ['Oy'],
      friends: [],
    },
    {
      username: 'AwesomeUser',
      email: 'AwesomeUser@gmail.com',
      thoughts: ['Whatever'],
      friends: ['Charlie'],
    },
  ];
  
  const thoughts = [
    {
      thoughtText: 'Blub, Bluub, Bluuuuub',
      user: 'Natalie1234',
      reactionBody: [ 'Nice!' ],
    },
    {
      thoughtText: 'How much does this cost?',
      user: 'AwesomeUser',
      reactionBody: ['Too much!'],
    },
    {
      thoughtText: 'I don\'t know what to write here!',
      user: 'ZDuncan9876',
      reactionBody: ['Me neither'],
    },
  ];

  // Add users to the collection and await the results
  await User.collection.insertMany(usernames);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(usernames);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
