<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold">Transactions</h1>
        <p class="mt-2 text-sm">This is the list of latest transactions.</p>
      </div>
    </div>
    <div class="mt-5 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
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
                  {{ transaction.date }}
                  <!-- {{ $d(transaction.date, "content", "en") }} -->
                </td>
                <td class="whitespace-nowrap py-4 px-3 text-sm">
                  {{ transaction.amount }}
                  <!-- {{ $n(transaction.amount, "decimal", "ja-JP") }} -->
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

<script setup>
const transactions = [
  {
    description: "Payment to Ian Marcello",
    date: "19-04-2023",
    amount: 114436,
    reference_number: 3822833082,
    payment_method: "Member",
    status: "Completed",
    color: "bg-green-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "08-04-2023",
    amount: 273589,
    reference_number: 8385461565,
    payment_method: "Member",
    status: "Pending",
    color: "bg-orange-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "05-04-2023",
    amount: 722683,
    reference_number: 2843531097,
    payment_method: "Member",
    status: "Cancelled",
    color: "bg-red-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "29-03-2023",
    amount: 508182,
    reference_number: 3977181730,
    payment_method: "Member",
    status: "Completed",
    color: "bg-green-200",
  },
  {
    description: "Payment to Ian Marcello",
    date: "13-03-2023",
    amount: 814383,
    reference_number: 3822112624,
    payment_method: "Member",
    status: "Completed",
    color: "bg-green-200",
  },
];
</script>
