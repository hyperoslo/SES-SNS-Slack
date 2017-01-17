'use strict';

module.exports.notify = (event, context, callback) => {
  var WebClient = require('@slack/client').WebClient;

  var token = process.env.SLACK_BOT_TOKEN;
  var channel = process.env.SLACK_POST_CHANNEL;
  var botName = process.env.SLACK_BOT_NAME;

  var web = new WebClient(token);

  web.chat.postMessage(channel, JSON.stringify(context), { username: botName }, function(err, res) {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'notification sent',
        input: event,
      }),
    };

    callback(null, response);
  });
};
