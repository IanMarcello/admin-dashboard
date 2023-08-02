<template>
  <div
    class="px-4 py-3 sm:px-6 lg:px-8 bg-light-100 dark:bg-dark-600 text-slate-900 dark:text-slate-200"
  >
    <AddUserView />
    <div class="flex flex-col px-4 mt-8 sm:px-6 lg:px-8">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="shadow-sm ring-1 ring-black ring-opacity-5">
            <table class="min-w-full border-separate" style="border-spacing: 0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="sticky top-16 sm:top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="sticky top-16 sm:top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="sticky top-16 sm:top-0 z-10 hidden border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="sticky top-16 sm:top-0 z-10 border-b border-gray-300 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    class="sticky top-16 sm:top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pr-4 pl-3 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(person, personIdx) in people" :key="person.email">
                  <td
                    :class="[
                      personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                      'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium sm:pl-6 lg:pl-8'
                    ]"
                  >
                    {{ person.name }}
                  </td>
                  <td
                    :class="[
                      personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                      'whitespace-nowrap px-3 py-4 text-sm hidden sm:table-cell'
                    ]"
                  >
                    {{ person.title }}
                  </td>
                  <td
                    :class="[
                      personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                      'whitespace-nowrap px-3 py-4 text-sm hidden lg:table-cell'
                    ]"
                  >
                    {{ person.email }}
                  </td>
                  <td
                    :class="[
                      personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                      'whitespace-nowrap px-3 py-4 text-sm'
                    ]"
                  >
                    {{ person.role }}
                  </td>
                  <td
                    :class="[
                      personIdx !== people.length - 1 ? 'border-b border-gray-200' : '',
                      'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-6 lg:pr-8'
                    ]"
                  >
                    <a href="#" class="text-indigo-600 hover:text-indigo-900"
                      >Edit<span class="sr-only">, {{ person.name }}</span></a
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

<script setup>
import AddUserView from '@/views/User/Users/Form/AddUserView.vue'

const people = [
  {
    name: 'Phillip Byrne',
    title: 'Director',
    email: 'phillip.byrne@example.com',
    role: 'Director'
  },
  {
    name: 'Faith Coffey',
    title: 'Manager',
    email: 'faith.coffey@example.com',
    role: 'Manager'
  },
  {
    name: 'Stephen Quinn',
    title: 'Assistant Manager',
    email: 'stephen.quinn@example.com',
    role: 'Assistant Manager'
  },
  {
    name: 'Felicity Gray',
    title: 'Assistant Manager',
    email: 'felicity.gray@example.com',
    role: 'Assistant Manager'
  },
  {
    name: 'Sydney Hart',
    title: 'Front-end Developer',
    email: 'sydney.hart@example.com',
    role: 'Member'
  },
  {
    name: 'Lili Lamb',
    title: 'Front-end Developer',
    email: 'lili.lamb@example.com',
    role: 'Member'
  },
  {
    name: 'Mohamad Perez',
    title: 'Back-end Developer',
    email: 'mohamad.perez@example.com',
    role: 'Member'
  },
  {
    name: 'Alia Holman',
    title: 'Back-end Developer',
    email: 'alia.holman@example.com',
    role: 'Member'
  },
  {
    name: 'Harold Mckay',
    title: 'Front-end Developer',
    email: 'harold.mckay@example.com',
    role: 'Member'
  },
  {
    name: 'Julie Solis',
    title: 'Front-end Developer',
    email: 'julie.solis@example.com',
    role: 'Member'
  },
  {
    name: 'Bobby Adams',
    title: 'Front-end Developer',
    email: 'bobby.adams@example.com',
    role: 'Member'
  },
  {
    name: 'Otis Beard',
    title: 'Front-end Developer',
    email: 'otis.beard@example.com',
    role: 'Member'
  },
  {
    name: 'Subhan Cook',
    title: 'Back-end Developer',
    email: 'subhan.cook@example.com',
    role: 'Member'
  },
  {
    name: 'Christopher Murphy',
    title: 'Back-end Developer',
    email: 'lindsay.christopher.murphy.com',
    role: 'Member'
  },
  {
    name: 'Tatiana Pierce',
    title: 'Back-end Developer',
    email: 'tatiana.pierce@example.com',
    role: 'Member'
  },
  {
    name: 'Robyn Fleming',
    title: 'Back-end Developer',
    email: 'robyn.fleming@example.com',
    role: 'Member'
  },
  {
    name: 'Mohamed Dyer',
    title: 'Front-end Developer',
    email: 'mohamed.dyer@example.com',
    role: 'Member'
  },
  {
    name: 'Vera Meyer',
    title: 'Front-end Developer',
    email: 'vera.meyer@example.com',
    role: 'Member'
  },
  {
    name: 'Kristina Sanford',
    title: 'Back-end Developer',
    email: 'kristina.sanford@example.com',
    role: 'Member'
  },
  {
    name: 'Brooklyn Singh',
    title: 'Back-end Developer',
    email: 'brooklyn.singh@example.com',
    role: 'Member'
  },
  {
    name: 'Rhonda Mckenzie',
    title: 'Front-end Developer',
    email: 'rhonda.mckenzie@example.com',
    role: 'Member'
  },
  {
    name: 'Edgar Noble',
    title: 'Front-end Developer',
    email: 'edgar.noble@example.com',
    role: 'Member'
  },
  {
    name: 'Lois Mason',
    title: 'Back-end Developer',
    email: 'lois.mason@example.com',
    role: 'Member'
  },
  {
    name: 'Sion Velez',
    title: 'Front-end Developer',
    email: 'sion.velez@example.com',
    role: 'Member'
  },
  {
    name: 'Talha Walker',
    title: 'Front-end Developer',
    email: 'talha.walker@example.com',
    role: 'Member'
  },
  {
    name: 'Sylvia Jacobs',
    title: 'Back-end Developer',
    email: 'sylvia.jacobs@example.com',
    role: 'Member'
  }
]
</script>
