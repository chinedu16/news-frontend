<template>
  <div>
    <div class="bg-green-200">
      <div class="p-20">
        <div>
          <h1 class="font-black text-3xl text-center">MY READ LIST</h1>
        </div>
      </div>
    </div>
    <div
      class="py-20 px-5 md:p-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6"
    >
      <div
        class="cards h-80 relative"
        v-for="news in readList"
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
              el-icon-delete-solid
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
import localStorageHelper from "../helpers/local";
export default {
  data() {
    return {
      input: "",
      readList: "",
      loading: false,
    };
  },
  methods: {
    async getReadList() {
      this.loading = true;
      const response = localStorage.getItem("READLIST");
      this.readList = JSON.parse(response);
    },
    addToReadList(news) {
      localStorageHelper.deleteOrders(news);
      this.getReadList();
      this.$notify({
        title: "Success",
        message: "Remove to your read list",
        type: "success",
      });
    },
  },
  mounted() {
    this.getReadList();
  },
};
</script>

<style lang="scss">
.search_input .el-input__inner {
  height: 60px;
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
