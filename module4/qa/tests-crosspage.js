// var Browser = require('zombie'),
//     assert = require('chai').assert;
// var browser; suite('Cross-Page Tests', function () {
//     setup(function () {
//         browser = new Browser();
//     });
//     test('requesting a group rate quote from the hood river tour page' + 'should populate the referrer field', function (done) {
//         var referrer = 'http://spweir.it.pointpark.edu:4001/form';
//         browser.visit(referrer, function () {
//             browser.clickLink('/form', function () {
//                 assert(browser.field('referrer').value === referrer);
//                 done();
//             });
//         });
//     });
//     test('requesting a group rate from the oregon coast tour page should ' + 'populate the referrer field', function (done) {
//         var referrer = 'http://spweir.it.pointpark.edu:4001/form';
//         browser.visit(referrer, function () {
//             browser.clickLink('/form', function () {
//                 assert(browser.field('referrer').value === referrer);
//                 done();
//             });
//         });
//     });
//     test('visiting the "request group rate" page dirctly should result ' + 'in an empty referrer field', function (done) {
//         browser.visit('http://spweir.it.pointpark.edu:4001/form', function () {
//             assert(browser.field('referrer').value === '');
//             done();
//         });
//     });
// });

