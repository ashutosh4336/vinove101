// let scoreJhon = 89 + 134 + 110;
// let avgJhon = scoreJhon / 3;
// let scoreMike = 116 + 94 + 123;
// let avgMike = scoreMike / 3;

// // console.log(`Jhon   Mike`);
// // console.log(scoreJhon, scoreMike);
// // console.log(avgJhon, avgMike);

// if (scoreJhon > scoreMike) {
//   console.log(`Jhon's Team wins with ${scoreJhon} Points`);
// } else if (scoreMike > scoreJhon) {
//   console.log(`Mike's team wins with ${avgMike} points`);
// } else {
//   console.log(`It's a draw`);
// }

// function calculateAge(birthYear) {
//   return 2020 - birthYear;
// }

// // const ageMe = calculateAge(1999);
// // console.log(typeof ageMe);

// function yearsUntillRetirement(year, name) {
//   const age = calculateAge(year);
//   const retirement = 65 - age;
//   console.log(`${name} Retiers in ${retirement} Years`);
// }

// yearsUntillRetirement(1999, 'Ashutosh');

// function Statement //
// --------------------------- //

let whatDoYouDo = function(job, firstName) {
  switch (job) {
    case 'teacher':
      return `${firstName}  teaches Biology to College Students.`;
    case 'driver':
      return `${firstName}  Drives a Bus`;
    case 'designer':
      return `${firstName}  Works at a IT firm`;
    default:
      return `${firstName} The Person isn't Listed`;
  }
};

console.log(whatDoYouDo('teacher', 'Pinky Panda'));
