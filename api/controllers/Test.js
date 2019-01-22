module.exports = {
    fn: async function(){
        console.log('user create func call');
        return this.res.status(200).json({'response':{'status':'Ok'}});
    }
}