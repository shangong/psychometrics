module.exports = {
    friendlyName: 'CreateUser',
    exits: {

        success: {
            description: 'The requesting user  has been successfully Created.'
        },

        redirect: {
            description: 'The requesting user agent looks to be a web browser.',
            extendedDescription: 'After logging out from a web browser, the user is redirected away.',
            responseType: 'redirect'
        }
    },
    inputs: {

        firstName: {

            description: 'The first name of the user',
            example: 'John',
            required: true

        },
        lastName: {

            description: 'The last name of the user',
            example: 'Smith',
            required: true

        },
        email: {

            description: 'The email address  of the user',
            example: 'johnsmith@gmail.com',
            required: true

        },
    },
    fn: async function (inputs) {
        let user = await User.create(inputs).fetch();
        return this.res.status(200).json({ 'response': { 'status': 'Ok', 'playload': user } });
    }
}