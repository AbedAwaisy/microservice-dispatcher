const sendSMS = require('./sendSMS'); // Import notification services
const sendEmail = require('./sendEmail');
const phoneCall = require('./phoneCall');
const sendIoTNotification = require('./sendIoTNotification');
const sendJira = require('./jiraNotification');
const saveLog = require('./saveLog'); // Import function to save logs in the database

async function processError(errorDetails) {
  const { severity, phoneNumber, email, iotIp, userName, ...otherDetails } = errorDetails;

  
  // Process error based on severity
  switch (severity) {
    case 'High':
      await phoneCall(phoneNumber,"hi Abed, how are you");
      await sendSMS(phoneNumber,"hi Abed, how are you");
      await sendJira(jiraBaseUrl, username,apiToken,projectKey,"helooooooo");

      break;
    case 'Medium':
      await sendIoTNotification(iotIp, `High-severity error: ${otherDetails}`);
      await sendJira(jiraBaseUrl, username,apiToken,projectKey,"helooooooo");
      break;
    case 'Low':
      await sendJira(jiraBaseUrl, username,apiToken,projectKey,"helooooooo");
      break;
    default:
      // Handle other cases
  }
  
  // Log the operation in the database
  await saveLog(errorDetails.id, severity, 'Processed and notified', new Date(), userName);
}

module.exports = processError;
