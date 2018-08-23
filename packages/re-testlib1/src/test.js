const md5 = require('md5')

exports.dilla = function () {
    console.log("hi from packages/re-testlib1/src/test.js");
    console.log(`hi from lib: ${md5("dilla")}`)
}