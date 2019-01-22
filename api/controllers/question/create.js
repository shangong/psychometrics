module.exports = {
    friendlyName: 'saveAnswer',
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
        name: {
            description: 'The name the user wants to be referrenced as',
            example: 'John',
            required: true

        },
        email: {
            description: 'The last name of the user',
            example: 'Smith',
            required: true
        },
        gender: {
            description: 'The email address  of the user',
            required: true,
            type: 'boolean'
        },
        age: {
            required: true,
            type: 'number'
        },
        income: {
            required: true,
            type: 'number',
        },
        questions: {
            description: 'Question ref no and answers',
            required: true,
            type: 'json',
        },
        sponsor: {
            description: 'Sponsor',
            required: true,
            type: 'string'
        },
    },
    fn: async function (inputs) {
        // console.log("user ", inputs);
        let usermodel = {
            name: inputs.userName,
            email: inputs.email,
            gender: inputs.gender,
            age: inputs.age,
            income: inputs.income
        }
        var calConfig = require('../../../config/CalculationType');
        var allquestionArr = [];
        //  let user = await User.create(usermodel).fetch();
        for (q of inputs.questions) {
            let question = await Question.findOne({ questionNo: q.questionId });
            let dbq = {
                qno: q.questionId,
                dimension: question.dimension,
                questionType: question.questionType,
                answer: q.answer
            }
            allquestionArr.push(dbq);
            //  let ans = {answer:q.answer,question:q.questionId,user:user.id};
            // await Answer.create(ans);
        }
        let groupItems = [];
        groupItems.push(groupdata(allquestionArr, 'ATTITUDE'));

        groupItems.push(groupdata(allquestionArr, 'LIFESTYLE'));
        let finalGroup = [];
        finalGroup.push(calfinalresult(groupItems, "gambler", calConfig.gambler.weight));
        finalGroup.push(calfinalresult(groupItems, "saver", calConfig.saver.weight));
        finalGroup.push(calfinalresult(groupItems, "manager", calConfig.manager.weight));
        finalGroup.push(calfinalresult(groupItems, "influencer", calConfig.saver.weight));
        finalGroup.push(calfinalresult(groupItems, "spender", calConfig.saver.weight));
        console.log("main group", groupItems);
        console.log("final group", finalGroup);
        finalGroup.sort((a, b) => b.score - a.score);
        console.log("sorted array", finalGroup);
        console.log(`******** Your a  "${finalGroup[0].type}" !!`);
        return this.res.status(200).json({ 'response': { 'status': 'Ok', 'payload': inputs } });
    }


}

let groupdata = (allquestions, dimension) => {
    var calConfig = require('../../../config/CalculationType');
    let filterquestions = allquestions.filter(a => a.dimension === dimension);

    let positive = 0;
    let negative = 0;
    for (item of filterquestions) {
        if (item.questionType === 'Positive') {
            positive += item.answer;
        }
        else {
            negative += item.answer;
        }
    }
    console.log(`dimension is ${dimension} and total positive ${positive} and total negative ${negative} `);
    let deference = positive - negative;
    return {
        dimension,
        gambler: deference * calConfig.gambler[dimension],
        saver: deference * calConfig.saver[dimension],
        manager: deference * calConfig.manager[dimension],
        influencer: deference * calConfig.influencer[dimension],
        spender: deference * calConfig.spender[dimension],

    }

}
let calfinalresult = (groupitems, type, weight) => {
    let total = 0;
    for (item of groupitems) {
        total += item[type]
    }
    return {
        type,
        total,
        score: (total / weight)
    }
}
let getdimensionCal = (dimenstion) => {
    for (item in dimenstion) {
        console.log('items ', item);
    }
}
