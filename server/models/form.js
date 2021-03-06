/**
 * Form handler / validator.
 *
 * @package  build
 * @author   David Ascher <davida@mozillafoundation.org>
 *           Bobby Richter <bobby@mozillafoundation.org>
 *           Andrew Sliwinski <a@mozillafoundation.org>
 *           Simon Wex <simon@mozillafoundation.org>
 */

var otherRoles = ' * Design Lead: \n' +
  ' * Development Lead: \n' +
  ' * Quality Verifier: \n';

module.exports = function(req, res, callback) {
  // Validate
  req.assert('title', 'Please give your project a title.').notEmpty();
  req.assert('problem', 'Please provide a description of the problem you are trying to solve.').notEmpty();
  req.assert('audience', 'Please specify an audience.').notEmpty();
  req.assert('success', 'Please provide a description of what success looks like for your project.').notEmpty();
  req.assert('measurement', 'If you\'re not sure, just write, "Help needed!".').notEmpty();
  req.assert('vision', 'If you don\'t have a vision for a solution just write, "No idea!".').notEmpty();

  var errors = req.validationErrors();

  // Format body
  var blob = '' +
    '' + req.body.problem + '\n\n' +
    '### Audience\n' + req.body.audience + '\n\n' +
    '### Success\n' + req.body.success + '\n\n' +
    '### Vision\n' + req.body.vision + '\n\n' +
    '### Measurement\n' + req.body.measurement + '\n\n' +
    '### Roles\n' +
      ' * Phase: \n' +
      ' * Driver: ' + req.body.driver + '\n' +
      ' * Decision Maker: ' + req.body.decision + '\n' + otherRoles;
  console.log("DRIVER: >>>"+req.body.driver+"<<<");
  // Return
  callback(errors, {
    title: req.body.title,
    body: blob
  });
};
