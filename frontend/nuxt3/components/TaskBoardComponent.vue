<template>
  <div class="grid grid-cols-3 gap-10 p-10">
    <div class="w-full">
      <h1 class="w-full text-3xl flex justify-center py-10 font-bold">
        <Icon name="mdi:clock-outline" color="white" />
        <span class="ml-2">Pendentes</span>
      </h1>
      <div
        v-for="task in tasks"
        v-show="task.status === 'pending'"
        class="card w-full bg-white text-black shadow-xl rounded-none border-l-8 border-[#0000ff] mb-10"
      >
        <div class="card-body">
          {{user}}
          <h2 class="card-title">{{ task.title }}</h2>
          <p>{{ task.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <h1 class="w-full text-3xl flex justify-center py-10 font-bold">
        <Icon name="mdi:clock-outline" color="white" />
        <span class="ml-2">Pendentes</span>
      </h1>
      <div
        v-for="task in tasks"
        v-show="task.status === 'pending'"
        class="card w-full bg-white text-black shadow-xl rounded-none border-l-8 border-[#0000ff] mb-10"
      >
        <div class="card-body">
          <h2 class="card-title">{{ task.title }}</h2>
          <p>{{ task.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full">
      <h1 class="w-full text-3xl flex justify-center py-10 font-bold">
        <Icon name="mdi:clock-outline" color="white" />
        <span class="ml-2">Pendentes</span>
      </h1>
      <div
        v-for="task in tasks"
        v-show="task.status === 'pending'"
        class="card w-full bg-white text-black shadow-xl rounded-none border-l-8 border-[#0000ff] mb-10"
      >
        <div class="card-body">
          <h2 class="card-title">{{ task.title }}</h2>
          <p>{{ task.description }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UserModel} from '~/../core/src/domain/user/user-model'

const user = new UserModel({name: 'Test', email: 'test@email.com', password: '12345678'})

defineProps({
  tasks: {
    type: Array,
    required: false,
    default() {
      return []
    },
  },
  columns: {
    type: Array,
    required: false,
    default() {
      return []
    },
  },
})
</script>
