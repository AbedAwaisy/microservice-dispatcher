const sendSMS = require('./sendSMS'); // Import notification services
const sendEmail = require('./sendEmail');
const sendIoTNotification = require('./sendIoTNotification');
const saveLog = require('./saveLog'); // Import function to save logs in the database

async function processError(errorDetails) {
  const { severity, phoneNumber, email, iotIp, userName, ...otherDetails } = errorDetails;

  // Process error based on severity
  switch (severity) {
    case 'High':
      await sendSMS(phoneNumber, `High-severity error: ${otherDetails}`);
      await sendEmail(email, `High-severity error: ${otherDetails}`);
      await sendIoTNotification(iotIp, `High-severity error: ${otherDetails}`);
      break;
    case 'Medium':
      await sendEmail(email, `Medium-severity error: ${otherDetails}`);
      break;
    case 'Low':
      // Handle low-severity errors
      break;
    default:
      // Handle other cases
  }

  // Log the operation in the database
  await saveLog(errorDetails.id, severity, 'Processed and notified', new Date(), userName);
}

module.exports = processError;
