<template>
  <div class="bg-green-100">
    <div class="p-5 md:p-20">
      <div class="flex justify-between items-center">
        <h1 class="text-black font-black text-2xl block leading-none">
          News By Source
        </h1>
        <div>
          <el-select
            v-model="source_news"
            @change="getCategories"
            placeholder="Select News Source"
          >
            <el-option
              v-for="item in sources"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
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
      source_news: "",
      sources: [],
    };
  },
  methods: {
    async getCategories(source) {
      let params = source ? source : this.source_news;
      this.loading = true;
      const data = await api.filterNewsBySource(params);
      if (data) {
        this.newsCategories = data.data.articles.slice(0, 5);
        this.loading = false;
      } else {
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
  async mounted() {
    this.getCategories("techcrunch");
    const response = await api.getAllSources();
    this.sources = response.data.sources;
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
    -webkit-line-clamp: 3; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
}
</style>
