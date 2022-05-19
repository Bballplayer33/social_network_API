const userNames = [
   "Betty",
   "Sally",
   "James",
   "Peter",
   "Brain",
   "Opera",
   "Jasmine",
   "Marcus",
   "Thomas",
   "Jarad",
   "Paul",
   "Jack",
   "Jill",
   "Wilbur",
   "William",
   "Robert",
   "Ben",
   "Lloyd",
   "Kevin",
   "Carson"
  ];
  
  const thoughtText = [
    "Happy",
    "Sad",
    "Mad",
    "Glad",
    "Surprised",
    "Cautious",
    "Nervous",
    "Upset",
    "Angry",
    "Excited",
    "Thrilled",
    "Down",
    "UP"
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random user
  const getRandomUser = () =>
    `${getRandomArrItem(userNames)}${Math.floor(
      Math.random() * (99 - 18 + 1) + 18
    )}`;
  
  // Function to generate random thoughts that we can add to the database. Includes reactions.
  const getRandomThoughts = () => {
    const results = {
      thoughtText: getRandomArrItem(thoughtText),
      createdAt: Date.now,
      username: getRandomUser(),
      reactions: [],
    };
  
    return results;
  };
  
  module.exports = {
    getRandomThoughts,
    getRandomUser,
  };