<template>
  <h1>Halaman Agenda Kehumasan</h1>
  <SidebarAccordionVue class="mb-4" v-for="group in dataItem" :key="group.names">
    <template v-slot:title>
      <span
        class="font-semibold text-xl"
        :class="{ 'router-link-active': isActive('/humas/agendaKehumasan') }"
        >{{ group.names }}</span
      >
    </template>
    <template v-slot:content>
      <ul class="space-y-2">
        <li v-for="item in group.items" :key="item.id">
          <router-link
            :to="item.link"
            scrollBehaviour="none"
            class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <i :class="item.icon"></i>
            <span class="ml-3">{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </template>
  </SidebarAccordionVue>
</template>

<script>
import SidebarAccordionVue from "@/components/SidebarAccordion.vue";
export default {
  name: "AgendaKehumasan",
  components: { SidebarAccordionVue },

  data() {
    return {
      dataItem: {
        "GROUP A": {
          names: "GROUP A",
          open: false,
          items: [
            {
              name: "Halaman Keprotokoleran",
              link: "/humas/keprotokoleran",
              icon: "fa-solid fa-list-check",
            },
            {
              name: "Agenda Kehumasan",
              link: "/humas/agendaKehumasan",
              icon: "fa-solid fa-list-check",
            },
          ],
        },
        "GROUP B": {
          names: "GROUP B",
          open: false,
          items: [
            {
              name: "Halaman Keprotokoleran",
              link: "/humas/keprotokoleran",
              icon: "fa-solid fa-list-check",
            },
            {
              name: "Agenda Kehumasan",
              link: "/humas/agendaKehumasan",
              icon: "fa-solid fa-list-check",
            },
          ],
        },
      },
    };
  },

  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        const uri = this.$route.path.indexOf(path) === 0;
        console.log(uri);
        console.log(paths);
        return uri; // current path starts with this path string
      });
    },
    isActive(path) {
      const rout = this.$route.path === path;
      return rout;
    },
  },
};
</script>

<style></style>
