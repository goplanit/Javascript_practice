// // 객체에 키/값 할당하기
// const information = {
//   name: '김개발'
// }
// const verb = 'makes'
// const project = 'facebook'

// information[verb] = project

// console.log(information)

// // 객체 순회하기
// const obj = {
//   name: 'melon',
//   weight: 4350,
//   price: 16500,
//   isFresh: true
// }
// for (let key in obj) {
//   const value = obj[key]

//   console.log(key)
//   console.log(value)
// }

// Assignment - 다음 함수 안에 코드를 구현하세요
const getExamResult = (scores, requiredClasses) => {
  let scoresKey = Object.keys(scores);
  let scoreValue = Object.values(scores);
  let scoreBoth = Object.entries(scores);

  for (let i in requiredClasses) {
    scoresKey.push(requiredClasses[i]);
  }

  const set = new Set(scoresKey);
  const newScoreArr = [...set];

  // console.log(newScoreArr);

  let newScoreValue = [];

  for (let i in newScoreArr) {
    if (scoreValue[i] === "A+") {
      newScoreValue.push(4.5);
    } else if (scoreValue[i] === "A") {
      newScoreValue.push(4);
    } else if (scoreValue[i] === "B+") {
      newScoreValue.push(3.5);
    } else if (scoreValue[i] === "B") {
      newScoreValue.push(3);
    } else if (scoreValue[i] === "C+") {
      newScoreValue.push(2.5);
    } else if (scoreValue[i] === "C") {
      newScoreValue.push(2);
    } else if (scoreValue[i] === "D+") {
      newScoreValue.push(1.5);
    } else if (scoreValue[i] === "D") {
      newScoreValue.push(1);
    } else if (scoreValue[i] === "F" || scoreValue[i] === undefined) {
      newScoreValue.push(0);
    }
  }

  const newArray = [];

  for (let i = 0; i < 8; i++) {
    newArray.push(`${newScoreArr[i]}, ${newScoreValue[i]}`);
  }

  console.log(newScoreArr);
  console.log(newScoreValue);

  const result = {};

  // 1. 배열에서 객체로 변경 for문
  // for(i = 0; i < newScoreArr.length; i++) {
  //   x[newScoreArr[i]] = newScoreValue[i]
  // }

  // 2. 배열에서 객체 변경 forEach문
  newScoreArr.forEach((value, idx) => (result[value] = newScoreValue[idx]));

  // 3. 배열에거 객체 변경 reduce문
  // const x = newScoreArr.reduce((obj, cur, idx) => {
  //   obj[cur] = newScoreValue[idx];
  //     return obj;
  // }, {})

  return result;

  // x = {}

  // for(let i = 0; i < newArray.length; i++) {
  //  console.log(`{${newArray[i]}}`);
  // }

  // console.log(newArray);
  // console.log(newArray.join());
};

const scores = {
  생활속의회계: "C",
  논리적글쓰기: "B",
  독일문화의이해: "B+",
  기초수학: "D+",
  영어회화: "C+",
  인지발달심리학: "A+",
};
const requiredClasses = ["영어회화", "기초수학", "공학수학", "컴퓨터과학개론"];

console.log(getExamResult(scores, requiredClasses));

module.exports = { getExamResult };
