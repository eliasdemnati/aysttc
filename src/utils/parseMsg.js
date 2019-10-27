/**
 * Parse things according to what I want
 * - Username
 * - What the user typed
 * - Is it a subscriber
 */

const parseMsg = (msg, channelName) => {
  const value = {};
  const infoValues = msg.split(';');
  const messageValue = infoValues.pop(); // Get last element of array which contains the message

  for (let info of infoValues) {
    const parsed = info.split('=');
    value[parsed[0]] = parsed[1];
  }

  value.message = messageValue.split(`PRIVMSG #${channelName} :`)[1];
  return value;
};

export default parseMsg;
