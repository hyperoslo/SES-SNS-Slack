module.exports.transform = (message) => {
  var parts = {};

  parts['Type'] = 'new subscription';
  parts['Message'] = message.message;

  return parts;
}
