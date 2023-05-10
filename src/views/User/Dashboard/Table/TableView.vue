<script setup>
import { dateFormatter, numberFormatter } from "@/services/formatter";

const transactions = [
  {
    description: "Payment to Ian Marcello",
    date: "2023-04-19",
    amount: 114436,
    reference_number: 3822833082,
    payment_method: "Bank",
    status: "Completed",
    color: "bg-green-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "2023-04-08",
    amount: 273589,
    reference_number: 8385461565,
    payment_method: "Bank",
    status: "Pending",
    color: "bg-orange-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "2023-04-05",
    amount: 722683,
    reference_number: 2843531097,
    payment_method: "Bank",
    status: "Cancelled",
    color: "bg-red-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "2023-03-29",
    amount: 508182,
    reference_number: 3977181730,
    payment_method: "Bank",
    status: "Completed",
    color: "bg-green-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "2023-03-13",
    amount: 814383,
    reference_number: 3822112624,
    payment_method: "Bank",
    status: "Completed",
    color: "bg-green-200",
  },
];
</script>

<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold">Transactions</h1>
        <p class="mt-2 text-sm">This is the list of latest transactions.</p>
      </div>
    </div>
    <div class="mt-5 flex flex-col">
      <div
        class="-my-2 -mx-4 overflow-x-auto scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800 sm:-mx-6 lg:-mx-8"
      >
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0"
                >
                  Transaction Description
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-3 text-left text-sm font-semibold"
                >
                  Transaction Date
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-3 text-left text-sm font-semibold"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-3 text-left text-sm font-semibold"
                >
                  Reference Number
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-3 text-left text-sm font-semibold"
                >
                  Payment Method
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-3 text-left text-sm font-semibold"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr
                v-for="transaction in transactions"
                :key="transaction.reference_number"
              >
                <td
                  class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 md:pl-0"
                >
                  {{ transaction.description }}
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
                  {{ dateFormatter.format(new Date(transaction.date)) }}
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
                  {{ numberFormatter.format(transaction.amount) }}
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
                  {{ transaction.reference_number }}
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
                  {{ transaction.payment_method }}
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
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
</template>
