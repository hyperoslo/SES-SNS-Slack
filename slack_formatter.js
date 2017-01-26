'use strict';

module.exports.format = (message_parts) => {
  return Object.keys(message_parts).map((key, index) => {
    return `*${key}*: ${message_parts[key]}`
  }).join("\r\n");
}
