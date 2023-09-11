const sendSMS = require('./sendSMS'); // Import notification services
const sendEmail = require('./sendEmail');
const phoneCall = require('./phoneCall');
const sendIoTNotification = require('./sendIoTNotification');
const sendJira = require('./jiraNotification');
const saveLog = require('./saveLog'); // Import function to save logs in the database

async function processError(errorDetails) {
  const { severity, phoneNumber, email, iotIp, userName, ...otherDetails } = errorDetails;

  ///data for jira
  const jiraBaseUrl = 'https://jirapr124.atlassian.net'; // Corrected base URL
  const username = 'rahmaazaiza2002@gmail.com';
  const apiToken = 'ATATT3xFfGF0jou8BuyT0H-_GAaurlyFBldCWlRcMboinBQVaZuRC_spu3DICIgagyCsREC4BzGqar8HDERMQyMexYyhKHJJ-hUyKxOwI6d9cpx7FyWlSTrgjl-V0nnQezgqm7dxKvL0QkofgE6eTO1qZK2Du7j_qis3BZvQVauQ5SvXTryinH4=8AF2CF52'; // Replace with your API token
  const projectKey = 'KAN';
  // Process error based on severity
  switch (severity) {
    case 'High':
     
      break;
    case 'Medium':
      await sendIoTNotification(iotIp, `High-severity error: ${otherDetails}`);
      await sendJira(jiraBaseUrl, username,apiToken,projectKey,"helooooooo");
      await phoneCall(phoneNumber,"hi alaa, how are you");
      await sendSMS(phoneNumber,"hi alaa, how are you");
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
