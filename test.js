const axios = require('axios');

async function getLatestRuns() {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/bhavishraj/practise/actions/runs`,
      {
        // headers: {
        //   Authorization: `Bearer ${GITHUB_TOKEN}`,
        //   Accept: 'application/vnd.github.v3+json',
        // },
      }
    );

    const runs = response.data.workflow_runs;
    const latestRuns = {};

    runs.forEach(run => {
      const { workflow_id, created_at} = run;

      if (
        !latestRuns[workflow_id]
      ) {
        latestRuns[workflow_id] = {created_at, workflow_id};
      }
    });

    console.log('Latest Runs by Workflow:', Object.values(latestRuns));
  } catch (error) {
    console.error('Error fetching workflow runs:', error.response?.data || error.message);
  }
}

getLatestRuns();
