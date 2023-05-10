<script setup>
import { dateFormatter, numberFormatter } from "@/services/formatter";

const transactions = [];
</script>

<template>
  <div
    class="py-3 px-4 sm:px-6 lg:px-8 bg-light-100 dark:bg-dark-600 text-slate-900 dark:text-slate-200"
  >
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold">Transactions</h1>
        <p class="mt-2 text-sm">
          A list of all the transactions in your account.
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add transaction
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div
        class="-my-2 -mx-4 overflow-x-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800 sm:-mx-6 lg:-mx-8"
      >
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr class="divide-light-300">
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pl-6"
                  >
                    Transaction Number
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-3.5 text-left text-sm font-semibold"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-3.5 text-left text-sm font-semibold"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-3.5 text-left text-sm font-semibold"
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pr-6"
                  >
                    Reference Number
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pr-6"
                  >
                    Payment Method
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pr-6"
                  >
                    Transaction Nature
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pr-6"
                  >
                    Transaction Date
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pr-6"
                  >
                    Transaction Time
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold sm:pr-6"
                  >
                    Transaction Status
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="transaction in transactions"
                  :key="transaction.email"
                  class="divide-gray-200"
                >
                  <td
                    class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium sm:pl-6"
                  >
                    {{ transaction.number }}
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm">
                    {{ transaction.description }}
                  </td>
                  <td class="whitespace-nowrap p-4 text-sm">
                    {{ numberFormatter.format(transaction.amount) }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    {{ transaction.currency }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    {{ transaction.reference_number }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    {{ transaction.payment_method }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    {{ transaction.nature }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    {{ dateFormatter.format(new Date(transaction.date)) }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    {{ transaction.time }}
                  </td>
                  <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm sm:pr-6">
                    <span
                      class="inline-flex rounded-full px-2 text-xs font-semibold leading-5 text-slate-900"
                      :class="transaction.color"
                      >{{ transaction.status }}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
