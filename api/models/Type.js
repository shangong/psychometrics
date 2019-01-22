/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
	  five_type: {type:"number",required:true,
	  enum:[0,1,2,3,4]
	  },
	  /* enum-
	  0: Gambler
	  1: Saver
	  2: Manager
	  3: Influencer
	  4: Spender
	  */
	  dimension_attitude:{type:"number"},
	  dimension_lifestyle:{type:"number"},
	  dimension_relational:{type:"number"},
	  dimension_security:{type:"number"},
	  dimension_social:{type:"number"},
	  dimension_identity:{type:"number"},
	  multiplier:{type:"number",required:true},
	},
};