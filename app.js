const accountSid = 'ACf16a15e6580453747fdabd8a4bea17d8';
const accountToken = '3b4f4d6cc15a258a8397cfe0e7bd30bb';

const client = require('twilio')(accountSid, accountToken);

client
  .messages.create({
    body: 'Hi this is Sushil.',
    from: '+15005550006',
    to: '+13374090467',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log('Error:::', error);
  })
  .done();