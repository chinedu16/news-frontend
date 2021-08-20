<template>
  <div class="bg-gray-200">
    <div class="p-5 md:p-20">
      <div class="md:flex justify-between items-center">
        <h1 class="mb-10 md:mb-0 text-black font-black text-2xl block leading-none">
          Quick Headlines
        </h1>
        <ul class="md:flex grid grid-cols-3 gap-5 items-center">
          <li
            class="text-base font-bold cursor-pointer text-green-400"
            @click="getCategories('business')"
          >
            Business
          </li>
          <li
            class="
              md:ml-5
              text-gray-500 text-base
              font-bold
              cursor-pointer
              hover:text-green-400
            "
            @click="getCategories('entertainment')"
          >
            Entertainment
          </li>
          <li
            class="
              md:ml-5
              text-base text-gray-500
              font-bold
              cursor-pointer
              hover:text-green-400
            "
            @click="getCategories('general')"
          >
            General
          </li>
          <li
            class="
              md:ml-5
              text-base text-gray-500
              font-bold
              cursor-pointer
              hover:text-green-400
            "
            @click="getCategories('health')"
          >
            Health
          </li>
          <li
            class="
              md:ml-5
              text-base text-gray-500
              font-bold
              cursor-pointer
              hover:text-green-400
            "
            @click="getCategories('science')"
          >
            Science
          </li>
          <li
            class="
              md:ml-5
              text-base text-gray-500
              font-bold
              cursor-pointer
              hover:text-green-400
            "
            @click="getCategories('sports')"
          >
            Sports
          </li>
          <li
            class="
              md:ml-5
              text-base text-gray-500
              font-bold
              cursor-pointer
              hover:text-green-400
            "
            @click="getCategories('technology')"
          >
            Technology
          </li>
        </ul>
      </div>
      <div
        class="
          my-20
          md:mt-20 md:mb-0
          grid grid-cols-1
          md:grid-cols-3
          gap-10
          md:gap-6
        "
        v-loading="loading"
      >
        <div
          class="cards h-80 relative"
          v-for="news in newsCategories"
          :key="news.title"
        >
          <img
            :src="
              news.urlToImage
                ? news.urlToImage
                : 'https://demo.tagdiv.com/newspaper_medicine_pro/wp-content/uploads/2020/04/logo-png.jpg'
            "
            :alt="news.title"
            class="w-full h-full object-cover"
          />
          <div
            class="
              flex
              justify-center
              items-center
              overlay
              h-3/6
              w-full
              absolute
              p-4
              overflow-hidden
            "
          >
            <h1 class="text-white text-2xl font-bold">
              {{ news.title }}
            </h1>
            <i
              class="
                cursor-pointer
                hover:text-green-400
                text-2xl
                block
                ml-3
                el-icon-circle-plus
                text-white
              "
              @click="addToReadList(news)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";
import localStorageHelper from "../helpers/local";
export default {
  name: "quick-headline",
  data() {
    return {
      newsCategories: "",
      loading: false,
    };
  },
  methods: {
    async getCategories(category) {
      this.loading = true;
      let iso = localStorage.getItem("country_ISO");
      const data = await api.getTopNewsHealinesCategories(iso, category);
      if (data) {
        this.newsCategories = data.data.articles.slice(0, 5);
        this.loading = false;
      }
    },
    addToReadList(news) {
      localStorageHelper.storeOrders(news);
      this.$notify({
        title: "Success",
        message: "Added to your read list",
        type: "success",
      });
    },
  },
  mounted() {
    this.getCategories("business");
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  background: rgba(0, 0, 0, 0.6);
  bottom: -13px;
  right: -13px;
  h1 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #059669;
      text-decoration-thickness: 6px;
      transition: all 0.5s;
    }
  }
}
</style>
