require('dotenv').config({silent: true});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const accountToken = process.env.TWILIO_AUTH_TOKEN;

const TwilioClient = require('twilio')(accountSid, accountToken);

TwilioClient
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