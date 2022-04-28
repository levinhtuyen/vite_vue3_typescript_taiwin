<template>
  <nav class="bg-white shadow-lg">
    <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="/">Brand</a>
        </div>
        <div class="md:hidden">
          <button
            type="button"
            class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                class="hidden"
                d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
              />
              <path
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="flex flex-col md:flex-row hidden md:block -mx-2">
        <a
          href="/"
          class="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >Home</a
        >
        <a
          href="/about"
          class="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >About</a
        >
        <a
          href="/login"
          class="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >Login</a
        >
        <a
          href="/login"
          @click="handleSingout()"
          class="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >Sign out</a
        >
        <!-- <span> {{ name }} : {{ count }}</span> -->
        <br />
        <!-- C1 -->
        <!-- <button
          @click="main.addCount"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button> -->
        <!-- C2 -->
        <!-- <button
          @click="addCount"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button> -->
        <!-- C3 -->
        <!-- <button
          @click="add(2)"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Button
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
  import { mapActions, storeToRefs } from 'pinia'
  import { useUserStore } from './../../store/useUser'
  const main = useUserStore()
  //C1 const { addCount } = main
  //C2 const { addCount } = mapActions(useUserStore, ['addCount'])
  //
  //C3 func
  // const add = (value: number) => {
  //   main.$patch({
  //     count: count.value + value,
  //   })
  // }
  const { count, name } = storeToRefs(main)
  const router = useRouter()
  const isLoggedIn = ref(false)
  let auth = ref()
  onMounted(() => {
    auth.value = getAuth()
    onAuthStateChanged(auth.value, (user) => {
      if (user) {
        isLoggedIn.value = true
      } else {
        isLoggedIn.value = false
      }
    })
  })
  const handleSingout = () => {
    signOut(auth.value).then(() => {
      router.push('/')
    })
  }
</script>

<style lang="scss" scoped></style>
