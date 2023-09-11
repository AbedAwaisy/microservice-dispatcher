const { Vonage } = require('@vonage/server-sdk')
const { NCCOBuilder, Talk, OutboundCallWithNCCO } = require('@vonage/voice')

const vonage = new Vonage({
  apiKey: 'f02de533', // Replace with your actual API key
  apiSecret: 'dosk6L7wty9i2RNC', // Replace with your actual API secret
  applicationId: '3d2dc681-3cb6-43a8-8dcf-2425cdd943a5', // Replace with your actual application ID
  privateKey: 'D:\\project\\courseFullStack\\final\\microservice-dispatcher\\backend\\notificationServices\\private.key', // Replace with the actual path to your private key file
});


async function phoneCall(phoneNumber,text) {
  try {
    const builder = new NCCOBuilder();
    builder.addAction(new Talk(`${text}`));
    const resp = await vonage.voice.createOutboundCall(
      new OutboundCallWithNCCO(
        builder.build(),
        { type: 'phone', number: `${phoneNumber}` }, //to Include the country code and put the number in quotes
        { type: 'phone', number: '+972524287681' } //from Include the country code and put the number in quotes
      )
    );

    console.log('Call initiated successfully:', resp);
  } catch (error) {
    console.error('Error making the call:', error);
  }
}

module.exports = phoneCall;