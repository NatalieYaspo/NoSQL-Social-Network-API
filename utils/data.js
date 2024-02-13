const usernames = [
    'Natalie1234',
    'ZDuncan9876',
    'AwesomeUser',
    'CrazyPerson',
    'TestingTesting',
  ];
  
  const thoughts = [
    'Decision Tracker',
    'Find My Phone',
    'Hello world',
    'Who even knows',
    'I just need to write something!',
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random full name
  const getRandomUsername = () =>
    `${getRandomArrItem(usernames)}`;
  
  // Function to generate random assignments that we can add to student object.
  const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomArrItem(thoughts),
      });
    }
    return results;
  };
  
  // Export the functions for use in seed.js
  module.exports = { getRandomUsername, getRandomThoughts };