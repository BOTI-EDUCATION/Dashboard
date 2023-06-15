<script setup>
import { useThemeConfig } from '@core/composable/useThemeConfig'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

// @layouts plugin
import { VerticalNavLayout } from '@layouts'

import axiosIns from "@/plugins/axios"

const { appRouteTransition, isLessThanOverlayNavBreakpoint } = useThemeConfig()
const { width: windowWidth } = useWindowSize()

let navItems = ref([])
async function getLinks(){
  axiosIns.get('getLinks').then(res=>{

    for (let i = 0; i < res.data.links.length; i++) {
      navItems.value.push({
        title :  res.data.links[i].title,
        to :  res.data.links[i].to,
        icon :  { icon : res.data.links[i].icon.icon },
      })
    }
    
    
    return res.data.links
  }).catch(err=>{
    console.log(err)
  })
  
}

getLinks()
</script>

<template>
  <VerticalNavLayout
    :nav-items="navItems"
  >
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <VBtn
          v-if="isLessThanOverlayNavBreakpoint(windowWidth)"
          icon
          variant="text"
          color="default"
          class="ms-n3"
          size="small"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon
            icon="tabler-menu-2"
            size="24"
          />
        </VBtn>


        <VSpacer />

        <NavbarThemeSwitcher />
        <UserProfile />
      </div>
    </template>

    <!-- 👉 Pages -->
    <RouterView v-slot="{ Component }">
      <Transition
        :name="appRouteTransition"
        mode="out-in"
      >
        <Component :is="Component" />
      </Transition>
    </RouterView>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer />
    </template>

    <!-- 👉 Customizer -->
    <TheCustomizer v-if="false" />
  </VerticalNavLayout>
</template>
