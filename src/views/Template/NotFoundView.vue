<script setup>
import themeIcon from "@/components/icons/themeIcon.vue";
import localeIcon from "@/components/icons/localeIcon.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen pt-16 pb-12">
    <main
      class="flex flex-col justify-center flex-grow w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
    >
      <div class="flex items-center justify-center gap-3 mb-6">
        <localeIcon
          class="transition duration-200 ease-in rounded-lg dark:bg-dark-700 dark:bg-opacity-20 hover:bg-light-400 hover:dark:bg-dark-500"
        />
        <themeIcon
          class="transition duration-200 ease-in rounded-lg dark:bg-dark-700 dark:bg-opacity-20 hover:bg-light-400 hover:dark:bg-dark-500"
        />
      </div>
      <div class="flex justify-center flex-shrink-0">
        <router-link :to="{ name: 'login' }" class="inline-flex">
          <span class="sr-only">Your Company</span>
          <img
            class="w-auto h-12"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </router-link>
      </div>
      <div class="py-16">
        <div class="text-center">
          <p class="text-base font-semibold text-indigo-600">404</p>
          <h1
            class="mt-2 text-4xl font-bold tracking-tight text-dark-900 dark:text-light-500 sm:text-5xl"
          >
            Page not found.
          </h1>
          <p class="mt-2 text-base text-dark-900 dark:text-light-400">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div class="mt-6">
            <router-link
              :to="{ name: 'dashboard' }"
              class="text-base font-medium text-indigo-600 hover:text-indigo-500"
            >
              Go back home
              <span aria-hidden="true"> &rarr;</span>
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
