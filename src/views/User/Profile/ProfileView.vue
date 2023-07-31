<template>
  <div class="flex flex-col gap-2 m-5 text-slate-900 dark:text-slate-200">
    <section class="flex flex-col w-full gap-4 lg:flex-row">
      <div
        class="flex items-center justify-center w-full px-3 rounded-lg shadow h-96 lg:w-1/4 bg-light-50 dark:bg-dark-450"
      >
        CONTENT
      </div>
      <div
        class="w-full px-5 rounded-lg shadow bg-light-50 dark:bg-dark-450 lg:w-3/4"
      >
        <div>
          <dl class="divide-y divide-gray-200">
            <div class="py-3 sm:flex sm:flex-row sm:gap-4 sm:py-5">
              <dt class="w-2/6 text-sm font-medium">Full name</dt>
              <dd class="flex justify-between mt-1 text-sm sm:w-4/6 sm:mt-0">
                <span class="flex-grow">Ian Marcello Jada</span>
                <span class="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    class="font-medium text-indigo-600 rounded-md hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:flex sm:flex-row sm:gap-4 sm:py-5">
              <dt class="w-2/6 text-sm font-medium">Email address</dt>
              <dd class="flex justify-between mt-1 text-sm sm:w-4/6 sm:mt-0">
                <span class="flex-grow">ian.marcello.jada19@gmail.com</span>
                <span class="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    class="font-medium text-indigo-600 rounded-md hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:flex sm:flex-row sm:gap-4 sm:py-5">
              <dt class="w-2/6 text-sm font-medium">Mobile</dt>
              <dd class="flex justify-between mt-1 text-sm sm:w-4/6 sm:mt-0">
                <span class="flex-grow">+255 XXX XXX XXX</span>
                <span class="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    class="font-medium text-indigo-600 rounded-md hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:flex sm:flex-row sm:gap-4 sm:py-5">
              <dt class="w-2/6 text-sm font-medium">Status</dt>
              <dd class="flex justify-between mt-1 text-sm sm:w-4/6 sm:mt-0">
                <span class="flex-grow">Active</span>
                <span class="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    class="font-medium text-indigo-600 rounded-md hover:text-indigo-500"
                  >
                    Update
                  </button>
                </span>
              </dd>
            </div>
            <div class="py-3 sm:flex sm:flex-row sm:gap-4 sm:py-5">
              <dt class="w-2/6 text-sm font-medium">Address</dt>
              <dd class="flex justify-between mt-1 text-sm sm:w-4/6 sm:mt-0">
                <span class="flex-grow">Tanzania</span>
                <span class="flex-shrink-0 ml-4">
                  <button
                    type="button"
                    class="font-medium text-indigo-600 rounded-md hover:text-indigo-500"
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
              class="flex justify-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="flex gap-4 mt-2">
      <div
        class="w-full p-3 overflow-auto rounded-lg shadow sm:w-1/4 bg-light-50 dark:bg-dark-450 h-96"
      >
        <div class="mt-2">
          <dl class="divide-y divide-gray-200">
            <div
              class="flex flex-row justify-between py-4 sm:px-5 sm:gap-4 sm:py-5"
            >
              <dt class="text-sm font-medium">Github</dt>
              <dd class="flex mt-1 text-sm sm:mt-0">
                <span class="flex-grow">Content</span>
              </dd>
            </div>
            <div
              class="flex flex-row justify-between py-4 sm:px-5 sm:gap-4 sm:py-5"
            >
              <dt class="text-sm font-medium">LinkedIn</dt>
              <dd class="flex mt-1 text-sm sm:mt-0">
                <span class="flex-grow">Content</span>
              </dd>
            </div>
            <div
              class="flex flex-row justify-between py-4 sm:px-5 sm:gap-4 sm:py-5"
            >
              <dt class="text-sm font-medium">Twitter</dt>
              <dd class="flex mt-1 text-sm sm:mt-0">
                <span class="flex-grow">Content</span>
              </dd>
            </div>
            <div
              class="flex flex-row justify-between py-4 sm:px-5 sm:gap-4 sm:py-5"
            >
              <dt class="text-sm font-medium">Instagram</dt>
              <dd class="flex mt-1 text-sm sm:mt-0">
                <span class="flex-grow">Content</span>
              </dd>
            </div>
            <div
              class="flex flex-row justify-between py-4 sm:px-5 sm:gap-4 sm:py-5"
            >
              <dt class="text-sm font-medium">Discord</dt>
              <dd class="flex mt-1 text-sm sm:mt-0">
                <span class="flex-grow">Content</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>
