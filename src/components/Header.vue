<template>
  <div class="w-full">
    <div class="flex justify-between items-center md:mx-20">
      <div>
        <a href="/" class="flex items-center">
          <img
            src="https://demo.tagdiv.com/newspaper_medicine_pro/wp-content/uploads/2020/04/logo-png.jpg"
            alt="news-logo"
            height="56"
            width="56"
          />
          <div class="ml-2">
            <span class="font-black text-2xl block leading-none"
              >Newsnation</span
            >
            <span class="font-bold leading-none">
              YouVerify
              <span class="text-green-600 leading-none">NEWS</span></span
            >
          </div>
        </a>
      </div>

      <nav class="hidden md:block">
        <ul class="flex items-center justify-between">
          <li class="ml-10">
            <a href="/" class="text-base font-bold">Home</a>
          </li>
          <!-- <div class="ml-10 group inline-block">
            <button class="outline-none focus:outline-none flex items-center">
              <span class="pr-1 font-semibold flex-1">Categories</span>
              <span>
                <svg
                  class="
                    fill-current
                    h-4
                    w-4
                    transform
                    group-hover:-rotate-180
                    transition
                    duration-150
                    ease-in-out
                  "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </span>
            </button>
            <ul
              class="
                bg-white
                border
                rounded-sm
                transform
                scale-0
                group-hover:scale-100
                absolute
                transition
                duration-150
                ease-in-out
                origin-top
                min-w-32
              "
            >
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Business</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                Entertainment
              </li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">General</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Health</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Science</li>
              <li class="rounded-sm px-3 py-1 hover:bg-gray-100">Technology</li>
            </ul>
          </div> -->
          <li class="ml-10">
            <a href="/read-list" class="text-base font-bold">Read List</a>
          </li>
          <li class="ml-10">
            <a href="/support" class="text-base font-bold">Support</a>
          </li>
        </ul>
      </nav>

      <a
        href="/search"
        class="
          hidden
          md:block
          flex
          items-center
          text-base
          font-bold
          hover:text-green-400
        "
      >
        <span class="hover:text-green-400">Search</span>
        <i class="ml-3 text-base font-bold el-icon-search"></i>
      </a>

      <!-- Top Navigation Menu -->
      <div class="block md:hidden">
        <el-dropdown>
          <el-button type="primary" style="padding: 0px;">
            <i class="text-4xl el-icon-s-fold el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <a href="/">Home</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="/read-list">Read List</a>
            </el-dropdown-item>
            <el-dropdown-item>
              <a href="/search">Search</a>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    myFunction() {
      var x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
    },
  },
};
</script>

<style>
/* since nested groupes are not supported we have to use 
     regular css for the nested dropdowns 
  */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
  	 See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
  	 for implementation with config file
  */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 8rem;
}
</style>
