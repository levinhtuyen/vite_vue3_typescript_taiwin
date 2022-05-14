<template>
  <nav class="bg-white shadow-lg">
    <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
      <div class="flex justify-between items-center">
        <div class="text-2xl font-bold text-gray-800 md:text-3xl">
          <a href="/">Brand</a>
        </div>
        <div class="md:hidden">
          <button
            @click="actionOpenCloseHeader"
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
      <div
        class="flex flex-col md:flex-row md:block -mx-2"
        :class="!isOpen ? 'hidden' : ''"
      >
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
          href="/category"
          class="text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
          >Category</a
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
        <button
          @click="actionOpenCloseHeaderCart"
          class="text-gray-600 focus:outline-none mx-4 sm:mx-0"
        >
          <svg
            class="h-5 w-5"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
  <div
    :class="cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
    class="fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 z-50"
  >
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
      <button
        @click="cartOpen = !cartOpen"
        class="text-gray-600 focus:outline-none"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <hr class="my-3" />
    <div class="flex justify-between mt-6 z-50">
      <div class="flex">
        <img
          class="h-20 w-20 object-cover rounded"
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          alt=""
        />
        <div class="mx-3">
          <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
          <div class="flex items-center mt-2">
            <button
              class="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
            <span class="text-gray-700 mx-2">2</span>
            <button
              class="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span class="text-gray-600">20$</span>
    </div>
    <div class="flex justify-between mt-6">
      <div class="flex">
        <img
          class="h-20 w-20 object-cover rounded"
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          alt=""
        />
        <div class="mx-3">
          <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
          <div class="flex items-center mt-2">
            <button
              class="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
            <span class="text-gray-700 mx-2">2</span>
            <button
              class="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span class="text-gray-600">20$</span>
    </div>
    <div class="flex justify-between mt-6">
      <div class="flex">
        <img
          class="h-20 w-20 object-cover rounded"
          src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
          alt=""
        />
        <div class="mx-3">
          <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
          <div class="flex items-center mt-2">
            <button
              class="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
            <span class="text-gray-700 mx-2">2</span>
            <button
              class="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <span class="text-gray-600">20$</span>
    </div>
    <div class="mt-8">
      <form class="flex items-center justify-center">
        <input
          class="form-input w-48"
          type="text"
          placeholder="Add promocode"
        />
        <button
          class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
        >
          <span>Apply</span>
        </button>
      </form>
    </div>
    <a
      class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
    >
      <span>Chechout</span>
      <svg
        class="h-5 w-5 mx-2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </a>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth'
  import { mapActions, storeToRefs } from 'pinia'
  import { useUserStore } from './../../store/useUser'
  import { useStoreCategory } from './../../store/useStoreCategory'

  const main = useUserStore()
  const cartOpen = ref<boolean>(false)
  const isOpen = ref<boolean>(false)
  const router = useRouter()
  // action open close cart
  const actionOpenCloseHeaderCart = () => {
    cartOpen.value = !cartOpen.value
  }
  const actionOpenCloseHeader = () => {
    isOpen.value = !isOpen.value
  }

  const { count, name } = storeToRefs(main)
  const storeCategory = useStoreCategory()
  const { chooseProduct } = storeCategory
  // check auth login
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
