"use strict";

let submissions = [
  {
    name: "Jane",
    score: 95,
    date: "1",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "1",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "1",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "1",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };

  return array.push(newSubmission);
};
console.log(addSubmission(submissions, "Nathan", 50, "1"));
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 4);
};
deleteSubmissionByIndex(submissions, 4);
console.log(submissions);

const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((submission) => {
    return submission.name === name;
  });
  array.splice(index, 1);
};
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

// const editSubmission = (array, index, score) => {
//     let editScore {
//         score: newScore
//     }
// }

const findSubmissionByName = (array, name) => {
  array.find((item) => {
    return item.name === name;
  });
};

console.log(findSubmissionByName(submissions, "Joe"));
console.log(findSubmissionByName(submissions, "Jane"));

const findLowestScore = (array) => {
  console.log(array);
};
const findAverageScore = (array) => {
  for (let scores of scores) {
    console.log(scores);
  }
};

const filterPassing = (array) => {
  return filterPassing.filter((item) => {
    return item.score === true || false;
  });
};
console.log(submissions);

const filter90AndAbove = (array) => {
  return array.filter((score) => {
    return score >= 90;
  });
};
console.log(filter90AndAbove);
