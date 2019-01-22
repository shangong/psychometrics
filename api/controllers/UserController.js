/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    users: async function (req, res) {
        let users = await User.find();
        return res.status(200).json(users);
    },
    blog: async function (req, res) {
        return res.status(200).json({ 'ok': 1 });
    }

};

