const processError = require("../notificationServices/errorProcessor");

const errorController = {
  // getErrors: async (req, res) => {
  //   try {
  //     const errors = await Error.find(); // Use async/await to await the database query
  //     res.json(errors);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Error fetching errors ' + error.message });
  //   }
  // },

  sendError: async (req, res) => {
    try {
      const errorDetails = req.body; // Assuming the error details are in the request body
      console.log(errorDetails)
      await processError(errorDetails); // Process the error
      res.json({ message: 'Error reported and processed successfully' });
    } catch (error) {
      console.error('Error processing error:', error);
      res.status(500).json({ error: 'Error processing error: ' + error.message });    
    }
  },

  // startAutomatedMonitor: () => {
  //   console.log('Started Automated Monitoring');
  //   cron.schedule('* * * * *', async () => {
  //     try {
  //       const newErrors = await getNewErrors();
  //       processErrors(newErrors);
  //     } catch (error) {
  //       console.error('Error in automated monitoring:', error);
  //     }
  //   });
  // }
};

// async function getNewErrors() {
//   try {
//     const lastInsertedError = await Error.findOne().sort({ _id: -1 }).limit(1);
//     return lastInsertedError ? [lastInsertedError] : [];
//   } catch (error) {
//     console.error('Error fetching new errors:', error);
//     return [];
//   }
// }


module.exports = errorController;
