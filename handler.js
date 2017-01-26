'use strict';

module.exports.notify = (event, context, callback) => {
  var WebClient = require('@slack/client').WebClient;

  var token = process.env.SLACK_BOT_TOKEN;
  var channel = process.env.SLACK_POST_CHANNEL;
  var botName = process.env.SLACK_BOT_NAME;

  var web = new WebClient(token);

  var payload = event['Records'][0]['Sns'];
  var parsed_message = JSON.parse(payload['Message']);
  var message_type = parsed_message['notificationType'];

  var formatters = {
    'Bounce': 'bounce',
    'AmazonSnsSubscriptionSucceeded': 'new_subscription',
  };

  let message_transformer;
  if ( message_type in formatters) {
    message_transformer = formatters[message_type];
  } else {
    message_transformer = 'default';
  }

  var message_parts = require(`./transformers/${message_transformer}`).transform(parsed_message);
  var chat_message = require('./slack_formatter').format(message_parts);

  web.chat.postMessage(channel, chat_message, { username: botName }, function(err, res) {
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
