<script setup lang="ts">
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>
<template>
  <div class="w-full">
    <Header />
    <div class="flex bg-white" style="height: 600px">
      <div
        class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
      >
        <div>
          <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
            Build Your New <span class="text-indigo-600">Idea</span>
          </h2>
          <p class="mt-2 text-sm text-gray-500 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates. Cumque debitis
            dignissimos id quam vel!
          </p>
          <div class="flex justify-center lg:justify-start mt-6">
            <a
              class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
              href="#"
              >Get Started</a
            >
            <a
              class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
              href="#"
              >Learn More</a
            >
          </div>
        </div>
      </div>
      <div
        class="hidden lg:block lg:w-1/2"
        style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
      >
        <div
          class="h-full object-cover"
          style="
            background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
          "
        >
          <div class="h-full bg-black opacity-25"></div>
        </div>
      </div>
    </div>
    <!-- component -->
    <div class="flex">
      <main class="min-h-screen w-full bg-white">
        <nav
          class="flex items-center justify-between px-10 bg-white py-6 border-b"
        >
          <div
            class="flex items-center bg-gray-100 px-4 py-2 rounded-md space-x-3 w-96"
          >
            <input
              type="text"
              placeholder="search"
              class="bg-gray-100 outline-none w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 cursor-pointer text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div class="flex items-center space-x-4">
            <img
              class="w-8 rounded-full"
              src="https://imagez.tmz.com/image/f7/1by1/2021/12/14/f7703994b69d48ca802df55729a2325c_xl.jpg"
              alt="Elon Musk"
            />
            <p class="hidden md:block">Elon Musk</p>
          </div>
        </nav>
        <div class="mx-6">
          <h1 class="my-6 text-3xl">All Courses</h1>
          <div class="md:flex space-y-3 md:space-y-0 md:space-x-4 mt-6">
            <div
              class="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10"
            >
              <p class="text-3xl font-thin text-indigo-50 cursor-pointer">
                How to do Basic Jumping and how to landing safely
              </p>
              <div class="flex items-center mt-4 space-x-4">
                <img
                  class="w-10 h-10 rounded-full cursor-pointer"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-indigo-50 font-semibold cursor-pointer">
                    Thomas Hope
                  </h3>
                  <p class="text-indigo-50 text-sm font-thin">
                    53K views • 2 weeks ago
                  </p>
                </div>
              </div>
            </div>
            <div
              class="h-90 bg-gradient-to-r rounded-md from-indigo-600 to-purple-600 p-10"
            >
              <p class="text-3xl font-thin text-indigo-50 cursor-pointer">
                How to do Basic Jumping and how to landing safely
              </p>
              <div class="flex items-center mt-4 space-x-4">
                <img
                  class="w-10 h-10 rounded-full cursor-pointer"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-indigo-50 font-semibold cursor-pointer">
                    Thomas Hope
                  </h3>
                  <p class="text-indigo-50 text-sm font-thin">
                    53K views • 2 weeks ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="mx-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-10"
        >
          <div class="shadow-lg rounded-t-md overflow-hidden">
            <div class="">
              <img
                class="w-sm"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div class="p-2 relative">
                <p class="text-lg mt-6 font-semibold">
                  Basic how to ride your skateboard comfortly
                </p>
                <p>53K views • 2 weeks ago</p>
                <img
                  class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="shadow-lg rounded-t-md overflow-hidden">
            <div class="">
              <img
                class="w-sm"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div class="p-2 relative">
                <p class="text-lg mt-6 font-semibold">
                  Basic how to ride your skateboard comfortly
                </p>
                <p>53K views • 2 weeks ago</p>
                <img
                  class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="shadow-lg rounded-t-md overflow-hidden">
            <div class="">
              <img
                class="w-sm"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div class="p-2 relative">
                <p class="text-lg mt-6 font-semibold">
                  Basic how to ride your skateboard comfortly
                </p>
                <p>53K views • 2 weeks ago</p>
                <img
                  class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div class="shadow-lg rounded-t-md overflow-hidden">
            <div class="">
              <img
                class="w-sm"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                alt=""
              />
              <div class="p-2 relative">
                <p class="text-lg mt-6 font-semibold">
                  Basic how to ride your skateboard comfortly
                </p>
                <p>53K views • 2 weeks ago</p>
                <img
                  class="h-12 w-12 rounded-full absolute -top-6 p-0.5 border-2 right-6"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <!-- component -->
  </div>
  <Footer />
</template>
<style lang="scss" scoped></style>
