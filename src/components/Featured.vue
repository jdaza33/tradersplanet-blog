<template>
  <section class="service-area section-gap" id="service">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 pb-30 header-text text-center">
          <h1 class="mb-10 text-color" v-if="showTitle">{{title}}</h1>
          <p v-if="showSubtitle">{{subtitle}}</p>
        </div>
      </div>
      <div class="row">
        <div :class="`col-lg-${size}`" v-for="(curse, index) in cursos" :key="index">
          <div class="single-service" @click="showDetails(curse)">
            <div class="thumb">
              <img :src="'img/' + curse.img" alt height="300" />
            </div>
            <!-- <h4>Curso de Opciones Financieras</h4> -->
            <p class="margin-top" align="justify">{{curse.content}}</p>
          </div>
        </div>
      </div>
    </div>
    <modals-container />
  </section>
</template>

<script>
import ModalDetails from "./ModalDetails.vue";
import data from "../utils/api.featured.js";
export default {
  data() {
    return {
      cursos: [],
      data
    };
  },
  created() {
    this.dataLimit();
  },
  props: ["showTitle", "showSubtitle", "title", "subtitle", "limit", "size"],
  methods: {
    toGo(ruta) {
      window.scroll({ top: 0, left: 0 });
      this.$router.push({ path: ruta });
    },
    dataLimit() {
      if (this.limit <= 2) {
        for (let i = 0; i < this.limit; i++) {
          this.cursos.push(this.data[i]);
        }
      } else {
        this.cursos = this.data;
      }
    },
    showDetails(data) {
      this.$modal.show(
        ModalDetails,
        {
          data
        },
        {
          draggable: true,
          width: 450,
          height: 600,
          adaptive: true,
          overlayTransition: "overlay"
        }
      );
    }
  }
};
</script>

<style scoped>
.text-color {
  color: #636363;
}
</style>


