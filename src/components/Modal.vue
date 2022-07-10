<template>
  <transition name="slide-fade">
    <div
      id="mySidenav"
      class="sidenav w-auto md:w-96 lg:w-[28rem] lg:animate__slideInRight"
    >
      <div class="flex justify-between items-center p-5">
        <h1 class="font-bold text-dBlue">Detail Agenda</h1>
        <button class="hover:text-dBlue text-2xl font-bold" @click="close">
          &times;
        </button>
      </div>
      <hr />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white p-6">
        <slot name="header">Dummy header</slot>
      </h3>
      <div class="p-6 space-y-6 text-justify">
        <slot name="body"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
#mySidenav {
  background-color: white;
  box-shadow: -84px 6px 149px -60px rgba(165, 174, 235, 0.97);
  -webkit-box-shadow: -84px 6px 149px -60px rgba(165, 174, 235, 0.97);
  -moz-box-shadow: -84px 6px 149px -60px rgba(165, 174, 235, 0.97);
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  overflow-y: auto;
  transition: 0.5s;
  padding-top: 10px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* .sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
} */

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 640px) {
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
