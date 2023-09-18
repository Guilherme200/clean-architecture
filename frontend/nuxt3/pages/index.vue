<template>
  <div data-theme="dark">
    <div class="min-h-screen">
      <TaskBoardComponent :columns="columns" :tasks="tasks" />
    </div>
  </div>
</template>
<script setup lang="ts">
const columns = [
  {title: 'Pendentes', status: 'pending', icon: 'mdi:clock-outline', color: '#0000ff'},
  {title: 'Em Andamento', status: 'in_progress', icon: 'carbon:in-progress', color: '#ffa500'},
  {title: 'Concluídas', status: 'done', icon: 'mdi:done', color: '#00ff00'},
]

const tasks = [
  {title: 'Task 01', description: 'My task 01', status: 'pending'},
  {title: 'Task 02', description: 'My task 02', status: 'pending'},
  {title: 'Task 03', description: 'My task 03', status: 'done'},
]
</script>