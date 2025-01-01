<template>
  <div id="app">
    <h1>GitHub Actions Dashboard</h1>
    <WorkflowTabs />
  </div>
</template>

<script>
import WorkflowTabs from './components/WorkflowTabs.vue';

export default {
  name: 'App',
  components: {
    WorkflowTabs,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}
</style>
