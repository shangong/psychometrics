/**
 * Question.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    questionNo:{type:"number"},
    question:{type:"string"},
    dimension:{type:"string",enum:['ATTITUDE','LIFESTYLE','RELATIONSHIPS','SECURITY','SOCIALRESPONSIBILITY','IDENTITY']}, //enum- 1 to 6 with 1 = Attitude
    questionType:{type:"string",enum:['Positive','Negative']} //enum- 0: Positive, 1: Negative
  },
};