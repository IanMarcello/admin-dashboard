<script setup>
const user = JSON.parse(sessionStorage.getItem("user")).name;
</script>

<template>
  <main class="flex justify-center flex-1 text-center sm:items-center">
    <div>
      <p class="text-base font-semibold text-indigo-600">
        {{ $t("user.welcome") }},
      </p>
      <h1
        class="text-4xl font-bold tracking-tight text-gray-900 capitalize sm:text-5xl"
      >
        {{ user }}
      </h1>

      <div class="mt-6">
        <router-link
          :to="{ name: 'todo' }"
          class="text-base font-medium text-indigo-600 uppercase hover:text-indigo-500"
        >
          {{ $t("user.see_tasks") }}
          <span aria-hidden="true"> &rarr;</span>
        </router-link>
      </div>
    </div>
  </main>
</template>
