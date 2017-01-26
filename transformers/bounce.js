module.exports.transform = (message) => {
  var parts = {};

  parts['Type'] = 'bounce';
  parts['Bounce Type'] = message.bounce.bounceType;
  parts['Sender'] = message.mail.source;
  parts['Restination'] = message.mail.destination.join(', ');

  return parts;
}
