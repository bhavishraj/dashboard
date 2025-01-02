<template>
    <div>
      <h2>{{ filter }} Workflows</h2>
      <table>
        <thead>
          <tr>
            <th>Workflow</th>
            <th>Status</th>
            <th>Branch</th>
            <th>Updated today</th>
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
        if (this.filter === 'All') return this.workflows;
        if (this.filter === 'main') return this.workflows.filter(run => run.main.includes('main'));
        if (this.filter === 'v2.18') return this.workflows.filter(run => run.main.includes('v2.18'));
        return [];
      },
    },
    async mounted() {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/bhavishraj/practise/actions/runs',
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
  