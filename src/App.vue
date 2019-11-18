<template>
  <div id="app" class="min-h-screen font-sans">
    <div class="container mx-auto py-6 sm:py-12 sm:px-4">
      <div class="flex flex-wrap sm:-mx-20">
        <div class="w-full sm:w-1/2 px-10 pb-12">
          <h5 class="mb-6 text-white text-2xl font-normal">Sortable Post List</h5>
          <div class="bg-white shadow h-24 rounded overflow-hidden sm:mr-10 border flex justify-between p-4 sm:mb-6 mb-4">
            <div class="w-11/12 sm:text-lg text-sm py-4">
              Post 1
            </div>
            <div class="py-6">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </div>
          </div>
          <div class="bg-white shadow h-24 rounded overflow-hidden sm:mr-10 border flex justify-between p-4 sm:mb-6 mb-4">
            <div class="w-11/12 sm:text-lg text-sm py-4">
              Post 2
            </div>
            <div class="flex flex-col justify-between">
              <div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
              </div>
              <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
              </div>
            </div>
          </div>
          <div class="bg-white shadow h-24 rounded overflow-hidden sm:mr-10 border flex justify-between p-4 sm:mb-6 mb-4">
            <div class="w-11/12 sm:text-lg text-sm py-4">
              Post 3
            </div>
            <div class="flex flex-col justify-between">
              <div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
              </div>
              <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
              </div>
            </div>
          </div>
          <div class="bg-white shadow h-24 rounded overflow-hidden sm:mr-10 border flex justify-between p-4 sm:mb-6 mb-4">
            <div class="w-11/12 sm:text-lg text-sm py-4">
              Post 4
            </div>
            <div class="flex flex-col justify-between">
              <div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
              </div>
              <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
              </div>
            </div>
          </div>
          <div class="bg-white shadow h-24 rounded overflow-hidden sm:mr-10 border flex justify-between p-3 sm:mb-6 mb-4">
            <div class="w-11/12 sm:text-lg text-sm py-4">
              Post 5
            </div>
            <div class="py-6">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" class="sm:h-4 h-3 text-indigo-700 hover:text-indigo-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 px-10">
          <div class="bg-gray-200 shadow border-solid rounded overflow-hidden border-b">
            <div class="bg-gray-100 px-4 py-4 text-xl border-solid border-gray-100 border">
              List of actions commited
            </div>
            <div class="m-3 sm:m-6">
              <div class="bg-white h-20 rounded p-3 shadow border flex justify-between">
                <div class="sm:my-3 my-1 sm:text-base text-sm">
                  Moved post 1 from index 2 to index 1
                </div>
                <button class="h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-32 hover:text-white">
                  Time travel
                </button>
              </div>
              <div class="bg-white h-20 rounded p-3 shadow border flex justify-between">
                <div class="sm:my-3 my-1 sm:text-base text-sm">
                  Moved post 3 from index 4 to index 3
                </div>
                <button class="h-12 m-1 bg-green-300 rounded text-sm shadow sm:text-base w-32 hover:text-white">
                  Time travel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>