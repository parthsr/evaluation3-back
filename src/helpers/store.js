const getQWithA = require('./getQWithA');
const Models = require('../../models');

const store = () => getQWithA().then((results) => {
  const dataToBeStored = results.map((result) => {
    const keys = Object.keys(result);
    let options = '';
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] !== 'question' && keys[i] !== 'questionId' && keys[i] !== 'rightAnswer') {
        options += `${result[keys[i]]},`;
      }
    }
    console.log(options, result.question);

    const newQuestion = {
      question: result.question,
      questionid: result.questionId,
      options,
      rightans: result.rightAnswer,
    };
    return newQuestion;
  });
  Models.questions.destroy({ truncate: true });
  return Models.questions.bulkCreate(dataToBeStored).then(() => { console.log('database made'); });
});

module.exports = store;
