<script setup>
import { dateFormatter, numberFormatter } from "@/services/formatter";

const transactions = [
  {
    number: "TRN-0811899186",
    description: "Payment to Ian Marcello",
    amount: 114436,
    currency: "TZS",
    reference_number: 3822833082,
    payment_method: "Bank",
    nature: "DEBIT TRANSACTION",
    date: "2023-04-19",
    time: "11:34:37",
    status: "Completed",
    color: "bg-green-200",
  },
  {
    number: "TRN-4258303918",
    description: "Payment to Ian Marcello",
    amount: 273589,
    currency: "TZS",
    reference_number: 8385461565,
    payment_method: "Bank",
    nature: "DEBIT TRANSACTION",
    date: "2023-04-08",
    time: "17:48:21",
    status: "Pending",
    color: "bg-orange-200",
  },
  {
    number: "TRN-9767186998",
    description: "Payment to Ian Marcello",
    amount: 722683,
    currency: "TZS",
    reference_number: 2843531097,
    payment_method: "Bank",
    nature: "DEBIT TRANSACTION",
    date: "2023-04-05",
    time: "11:25:46",
    status: "Cancelled",
    color: "bg-red-200",
  },
  {
    number: "TRN-3948441184",
    description: "Payment to Ian Marcello",
    amount: 508182,
    currency: "TZS",
    reference_number: 3977181730,
    payment_method: "Bank",
    nature: "DEBIT TRANSACTION",
    date: "2023-03-29",
    time: "04:54:35",
    status: "Completed",
    color: "bg-green-200",
  },
  {
    number: "TRN-6249545779",
    description: "Payment to Ian Marcello",
    amount: 814383,
    currency: "TZS",
    reference_number: 3822112624,
    payment_method: "Bank",
    nature: "DEBIT TRANSACTION",
    date: "2023-03-13",
    time: "04:04:37",
    status: "Completed",
    color: "bg-green-200",
  },
];
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
