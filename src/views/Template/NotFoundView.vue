<script setup>
import themeIcon from "@/components/icons/themeIcon.vue";
import localeIcon from "@/components/icons/localeIcon.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col pt-16 pb-12">
    <main
      class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8"
    >
      <div class="flex items-center justify-center gap-3 mb-6">
        <localeIcon
          class="rounded-lg dark:bg-dark-700 transition duration-200 ease-in dark:bg-opacity-20 hover:bg-light-400 hover:dark:bg-dark-500"
        />
        <themeIcon
          class="rounded-lg dark:bg-dark-700 transition duration-200 ease-in dark:bg-opacity-20 hover:bg-light-400 hover:dark:bg-dark-500"
        />
      </div>
      <div class="flex flex-shrink-0 justify-center">
        <router-link :to="{ name: 'home' }" class="inline-flex">
          <span class="sr-only">Your Company</span>
          <img
            class="h-12 w-auto"
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
