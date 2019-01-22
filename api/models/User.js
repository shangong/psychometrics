/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
	  name:{type:"string",required:true},
	  age: {type:"number",required:true,
	  enum:[1,2,3,4,5,6,7,8,9]
	  },
	  /* enum-
	  1: 1-15
	  2: 16-18
	  3: 19-24
	  4: 25-29
	  5: 30-39
	  6: 40-49
	  7: 50-59
	  8: 60-69
	  9: >70
	  */
	  email:{type:"string",required:true},
	  gender:{type:"number",required:true}, //enum- 1: Male, 2: Female
	  income: {type:"number",required:true},
	  /* enum-
	  1: 0-1,999
	  2: 2,000-3,000
	  3: 3,000-4,000
	  4: 4,000-5,000
	  5: 5,000-10,000
	  6: 10,000-20,000
	  */
	  dimension_attitude:{type:"number"}, //calculation of dimension logic
	  dimension_lifestyle:{type:"number"},
	  dimension_relational:{type:"number"},
	  dimension_security:{type:"number"},
	  dimension_social:{type:"number"},
	  dimension_identity:{type:"number"},
	  type:{type:"number",enum:[0,1,2,3,4]},
	  /* enum-
	  0: Gambler
	  1: Saver
	  2: Manager
	  3: Influencer
	  4: Spender
	  */
	  sponsor:{type:"string"}
	  //timestamp:{type:"timestamp",}
	},
};