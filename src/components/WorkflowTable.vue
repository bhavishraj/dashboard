<template>
    <div>
      <h2>{{ filter }} Workflows</h2>
      <table>
        <thead>
          <tr>
            <th>Workflow</th>
            <th>Status</th>
            <th>Branch</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="run in filteredRuns" :key="run.id">
            <td>{{ run.name }}</td>
            <td>{{ run.status }}</td>
            <td>{{ run.head_branch }}</td>
            <td>{{ new Date(run.updated_at).toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'WorkflowTable',
    props: {
      filter: String,
    },
    data() {
      return {
        workflows: [],
      };
    },
    computed: {
      filteredRuns() {
        if (this.filter === 'Alls') return this.workflows;
        if (this.filter === 'Completed') return this.workflows.filter(run => run.conclusion === 'success');
        if (this.filter === 'Running') return this.workflows.filter(run => run.status === 'in_progress');
        if (this.filter === 'Failed') return this.workflows.filter(run => run.conclusion === 'failure');
        return [];
      },
    },
    async mounted() {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/{owner}/{repo}/actions/runs',
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          }
        );
        this.workflows = response.data.workflow_runs;
      } catch (error) {
        console.error('Error fetching workflows:', error);
      }
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }
  </style>
  