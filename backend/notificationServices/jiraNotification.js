
const axios = require('axios');

  ///data for jira
  const jiraBaseUrl = 'https://jirapr124.atlassian.net'; // Corrected base URL
  const username = 'rahmaazaiza2002@gmail.com';
  const apiToken = 'ATATT3xFfGF0jou8BuyT0H-_GAaurlyFBldCWlRcMboinBQVaZuRC_spu3DICIgagyCsREC4BzGqar8HDERMQyMexYyhKHJJ-hUyKxOwI6d9cpx7FyWlSTrgjl-V0nnQezgqm7dxKvL0QkofgE6eTO1qZK2Du7j_qis3BZvQVauQ5SvXTryinH4=8AF2CF52'; // Replace with your API token
  const projectKey = 'KAN';

async function sendJira(jiraBaseUrl, username,apiToken,projectKey,des){

    const authHeader = 'Basic ' + Buffer.from(username + ':' + apiToken).toString('base64');

    // Get project info
    const apiUrl1 = `${jiraBaseUrl}/rest/api/2/project/${projectKey}`;

    axios.get(apiUrl1, {
    headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
    console.log('Project Details:', response.data); // Access response.data for project details
    })
    .catch(error => {
    console.error('Error fetching project:', error.response.data); // Access error.response.data for detailed error info
    });

    // Create a new ticket
    const issueData2 = {
    fields: {
        project: {
        key: projectKey
        },
        summary: 'New Issue via API',
        description: `${des}`,
        issuetype: {
        id: '10001' // Replace with the correct issue type ID
        }
    }
    };

    const apiUrl2 = `${jiraBaseUrl}/rest/api/2/issue`;

    axios.post(apiUrl2, issueData2, { 
    headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json'
    }
    })
    .then(response => {
    console.log('New Issue Created:', response.data);
    })
    .catch(error => {
    console.error('Error creating issue:', error.response.data);
    });
}
  
  
module.exports = sendJira;