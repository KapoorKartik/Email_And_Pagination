const {connect} = require('mongoose');

module.exports = () => connect(`mongodb+srv://kapoorkartik:2jhAiBXJCU26Lg4@cluster0.lkd0p.mongodb.net/emaildb-1?retryWrites=true&w=majority`)