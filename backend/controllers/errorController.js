const cron = require('node-cron');
const Error = require('../models/Error');

const errorController = {
  getErrors: async (req, res) => {
    try {
      const errors = await Error.find(); // Use async/await to await the database query
      res.json(errors);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching errors ' + error.message });
    }
  },

  startAutomatedMonitor: () => {
    console.log('Started Automated Monitoring');
    cron.schedule('* * * * *', async () => {
      try {
        const newErrors = await getNewErrors();
        processErrors(newErrors);
      } catch (error) {
        console.error('Error in automated monitoring:', error);
      }
    });
  }
};

async function getNewErrors() {
  try {
    const lastInsertedError = await Error.findOne().sort({ _id: -1 }).limit(1);
    return lastInsertedError ? [lastInsertedError] : [];
  } catch (error) {
    console.error('Error fetching new errors:', error);
    return [];
  }
}

function processErrors(errors) {
  errors.forEach(error => {
    console.log('New Error Details:');
    console.log('Name:', error.name);
    console.log('Severity:', error.severity);
    console.log('Description:', error.description);
    console.log('----------------------');
  });
}
setTimeout(() => {errorController.startAutomatedMonitor();}, 2000);


module.exports = errorController;
