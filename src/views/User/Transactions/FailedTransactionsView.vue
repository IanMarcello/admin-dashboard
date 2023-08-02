<script setup>
import { dateFormatter, numberFormatter } from '@/services/formatter'

const transactions = []
</script>

<template>
  <section
    class="px-4 py-3 sm:px-6 lg:px-8 bg-light-100 dark:bg-dark-600 text-slate-900 dark:text-slate-200"
  >
    <header class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold">Failed Transactions</h1>
        <p class="mt-2 text-sm">A list of all the failed transactions in your account</p>
      </div>
    </header>

    <main class="flex flex-col mt-8">
      <div class="py-2 shadow scrollbar-thin scrollbar-track-blue-300 scrollbar-thumb-blue-800">
        <table class="w-full divide-y divide-gray-300 rounded-lg">
          <thead class="">
            <tr class="divide-light-300">
              <th scope="col" class="px-4 py-4 text-sm font-semibold text-left">
                Transaction Number
              </th>
              <th scope="col" class="px-4 py-4 text-sm font-semibold text-left">Description</th>
              <th scope="col" class="px-4 py-4 text-sm font-semibold text-left">Amount</th>
              <th scope="col" class="px-4 py-4 text-sm font-semibold text-left">
                Reference Number
              </th>
              <th
                scope="col"
                class="hidden px-4 py-4 text-sm font-semibold text-left lg:table-cell"
              >
                Payment Method
              </th>
              <th
                scope="col"
                class="hidden px-4 py-4 text-sm font-semibold text-left lg:table-cell"
              >
                Transaction Nature
              </th>
              <th scope="col" class="px-4 py-4 text-sm font-semibold text-left">
                Transaction Date
              </th>
              <th
                scope="col"
                class="hidden px-4 py-4 text-sm font-semibold text-left lg:table-cell"
              >
                Transaction Time
              </th>
              <th scope="col" class="px-4 py-4 text-sm font-semibold text-left">
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
              <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                {{ transaction.number }}
              </td>
              <td class="px-4 py-4 text-sm font-medium">
                {{ transaction.description }}
              </td>
              <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                {{ numberFormatter.format(transaction.amount) }}
              </td>
              <td class="px-4 py-4 text-sm font-medium whitespace-nowrap">
                {{ transaction.reference_number }}
              </td>
              <td class="hidden px-4 py-4 text-sm font-medium lg:table-cell">
                {{ transaction.payment_method }}
              </td>
              <td class="hidden px-4 py-4 text-sm font-medium lg:table-cell">
                {{ transaction.nature }}
              </td>
              <td class="px-4 py-4 text-sm font-medium">
                {{ dateFormatter.format(new Date(transaction.date)) }}
              </td>
              <td class="hidden px-4 py-4 text-sm font-medium lg:table-cell">
                {{ transaction.time }}
              </td>
              <td class="px-4 py-4 text-sm font-medium">
                <span
                  class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full text-slate-900"
                  :class="transaction.color"
                  >{{ transaction.status }}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </section>
</template>
