// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    const lengthOfLetters = letters.length;
    return drivers.filter(driver => driver.slice(0, lengthOfLetters) === letters);
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    const lengthOfLetters = letters.length;
    return drivers.filter(driver => driver.slice(0, lengthOfLetters) === letters);
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
  }
      