<template>
  <div class="home" v-loading="loading" v-if="location">
    <el-carousel height="616px" arrow="always" indicator-position="none">
      <el-carousel-item v-for="item in headlines" :key="item.title" class="">
        <div class="h-full">
          <img
            :src="item.urlToImage"
            :alt="item.name"
            class="h-full w-full object-cover"
          />
          <div class="top-0 overlay h-full w-full absolute">
            <div class="pt-32 pl-5 pr-5 md:pl-20 md:pr-0">
              <div
                class="
                  tags
                  bg-green-400
                  text-white
                  font-bold
                  py-1
                  px-5
                  mb-4
                  w-min
                  text-xl
                "
              >
                {{ location.country.name }}
              </div>
              <h3 class="text-white font-black text-5xl md:w-3/6 title_text">
                {{ item.title }}
              </h3>
              <p class="text-white my-5">{{ item.source.name }}</p>
              <p class="md:w-2/6 text-white text-base">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <QuickHeadline></QuickHeadline>
    <MoreNews></MoreNews>
  </div>
</template>

<script>
import api from "../api";
import QuickHeadline from "../components/QuickHeadline.vue";
import MoreNews from "../components/MoreNews.vue";
export default {
  name: "Home",
  components: {
    QuickHeadline,
    MoreNews,
  },
  data() {
    return {
      location: "",
      loading: false,
      headlines: "",
    };
  },
  methods: {
    async getLocation() {
      this.loading = true;
      const response = await api.getUserLocation();
      if (response) {
        this.location = response.data;
        localStorage.setItem("country_ISO", response.data.country.iso_code);
        const data = await api.getTopNewsHealines(
          response.data.country.iso_code
        );
        this.headlines = data.data.articles.slice(0, 7);
        this.loading = false;
      } else {
        console.log("error");
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getLocation();
  },
};
</script>

<style scoped>
.el-carousel__container {
  /* height: 616px; */
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
}

.title_text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>
