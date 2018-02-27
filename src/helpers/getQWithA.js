const rp = require('request-promise');

const getQWithA = () => rp('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allQuestions').then((allQuestions) => {
  const allQuestionsJson = JSON.parse(allQuestions);
  const questions = allQuestionsJson.allQuestions;
  const answers = questions.map((question) => {
    const questionID = question.questionId;
    return rp(`https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/findAnswerById/${questionID}`);
  });
  return Promise.all(answers).then((answerArray) => {
    for (let i = 0; i < questions.length; i += 1) {
      questions[i].rightAnswer = JSON.parse(answerArray[i]).answer;
    }
    return questions;
  });
});

// getQWithA().then(console.log);
module.exports = getQWithA;
