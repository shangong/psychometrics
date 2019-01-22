/**
 * Diamension.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      user: {
            model: 'User',
            unique: true
      },
      type:{type:"number",required:true},
      /* enum-
      0: Gambler
      1: Saver
      2: Manager
      3: Influencer
      4: Spender
      */
      attitude:{type:"number",required:true}, //calculation of Money Personality Profile
      lifestyle:{type:"number",required:true},
      relational:{type:"number",required:true},
      security:{type:"number",required:true},
      social:{type:"number",required:true},
      identity:{type:"number",required:true},
      score:{type:"number",required:true}
  },
};
