/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        user: {
            model: 'User',
            required: true
        },
        answer: { type: "integer", required: true },
        question: {
            model: 'Question',
        },
        user:{
            model: 'User',
        }
    },
};