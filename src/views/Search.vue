<template>
  <div>
    <div class="bg-gray-200">
      <div class="p-5 md:p-20">
        <div>
          <h1>SEARCH RESULTS FOR:</h1>
          <pre class="mt-4 font-black text-2xl">{{ input }}</pre>
        </div>

        <div class="flex w-full mt-6">
          <el-input
            class="md:w-11/12 search_input"
            placeholder="Please input"
            v-model="input"
          ></el-input>
          <el-button
            class="md:w-1/6"
            :loading="loading"
            @click="searchEntry"
            type="primary"
            >Search</el-button
          >
        </div>
      </div>
    </div>
    <div
      class="
        p-5
        md:p-20
        my-20
        md:mt-20 md:mb-0
        grid grid-cols-1
        md:grid-cols-3
        gap-10
        md:gap-6
      "
    >
      <div
        class="cards h-80 relative"
        v-for="news in searchResults"
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
          <h1 class="text-white text-2xl font-bold">{{ news.title }}</h1>
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
</template>

<script>
import api from "../api";
import localStorageHelper from "../helpers/local";
export default {
  data() {
    return {
      input: "",
      searchResults: "",
      loading: false,
    };
  },
  methods: {
    async searchEntry() {
      this.loading = true;
      if (this.input) {
        const response = await api.searchAllCatgories(this.input);
        this.searchResults = response.data.articles.slice(0, 5);
        this.loading = false;
      } else {
        this.loading = false;
        console.log("empty");
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
};
</script>

<style lang="scss">
.search_input .el-input__inner {
  height: 60px;
  &:hover,
  &:focus,
  &:active {
  }
}

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
