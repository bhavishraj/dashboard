<template>
  <div>
    <div class="tabs">
      <button
        v-for="filter in filters"
        :key="filter"
        :class="{ active: activeFilter === filter }"
        @click="setFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>
    <WorkflowTable :filter="activeFilter" />
  </div>
</template>

<script>
import WorkflowTable from './WorkflowTable.vue';

export default {
  name: 'WorkflowTabs',
  components: { WorkflowTable },
  data() {
    return {
      filters: ['All', 'Completed', 'Running', 'Failed'],
      activeFilter: 'All',
    };
  },
  methods: {
    setFilter(filter) {
      this.activeFilter = filter;
    },
  },
};
</script>

<style>
.tabs button {
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
}
.tabs button.active {
  background-color: #007bff;
  color: #fff;
}
</style>
