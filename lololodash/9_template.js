var _ = require('lodash')


let template = function (input) {

    var mytemplate = 'Hello <%= name %> (logins: <%= login.length %>)';

    return _.template(mytemplate)(input);
};

module.exports = template;
