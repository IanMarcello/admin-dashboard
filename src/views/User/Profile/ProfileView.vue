<template>
  <div class="grid gap-2 m-5 text-slate-900 dark:text-slate-200">
    <section class="grid grid-rows-2 gap-4 lg:grid-cols-12 lg:grid-rows-none">
      <div
        class="flex justify-center items-center px-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 sm:col-span-3 shadow"
      >
        CONTENT
      </div>
      <div
        class="px-5 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 sm:col-span-9 shadow"
      >
        <div>
          <dl class="divide-y divide-gray-200">
            <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Full name</dt>
              <dd class="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                <span class="flex-grow">Ian Marcello Jada</span>
                <span class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Email address</dt>
              <dd class="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                <span class="flex-grow">ian.marcello.jada19@gmail.com</span>
                <span class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Mobile</dt>
              <dd class="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                <span class="flex-grow">+255 XXX XXX XXX</span>
                <span class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Status</dt>
              <dd class="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                <span class="flex-grow">Active</span>
                <span class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Address</dt>
              <dd class="mt-1 flex text-sm sm:col-span-2 sm:mt-0">
                <span class="flex-grow">Tanzania</span>
                <span class="ml-4 flex-shrink-0">
                  <button
                    type="button"
                    class="rounded-md font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
          </dl>
          <div class="my-3">
            <button
              type="button"
              class="flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm transition ease-in duration-200 hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-2 grid gap-4 sm:grid-cols-12">
      <div
        class="sm:col-span-3 p-3 overflow-auto rounded-lg bg-light-50 dark:bg-dark-450 h-96 shadow"
      >
        <div class="mt-2">
          <dl class="divide-y divide-gray-200">
            <div class="py-4 grid grid-cols-2 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Github</dt>
              <dd class="mt-1 flex text-sm sm:mt-0">
                <span class="flex-grow"></span>
              </dd>
            </div>
            <div class="py-4 grid grid-cols-2 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">LinkedIn</dt>
              <dd class="mt-1 flex text-sm sm:mt-0">
                <span class="flex-grow"></span>
              </dd>
            </div>
            <div class="py-4 grid grid-cols-2 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Twitter</dt>
              <dd class="mt-1 flex text-sm sm:mt-0">
                <span class="flex-grow"></span>
              </dd>
            </div>
            <div class="py-4 grid grid-cols-2 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Instagram</dt>
              <dd class="mt-1 flex text-sm sm:mt-0">
                <span class="flex-grow"></span>
              </dd>
            </div>
            <div class="py-4 grid grid-cols-2 sm:gap-4 sm:py-5">
              <dt class="text-sm font-medium">Discord</dt>
              <dd class="mt-1 flex text-sm sm:mt-0">
                <span class="flex-grow"></span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>
