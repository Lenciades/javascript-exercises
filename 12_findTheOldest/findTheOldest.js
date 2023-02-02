function findTheOldest(people) {
    let lifeSpans =[];  
    lifeSpans = people.map(e=>(e.yearOfDeath||2023)-e.yearOfBirth);
    const max = Math.max(...lifeSpans)
    const index = lifeSpans.indexOf(max)
    return people[index]
}

// Do not edit below this line
module.exports = findTheOldest;
