<script setup>
import axiosIns from '@/plugins/axios'
import { useAppAbility } from '@/plugins/casl/useAppAbility'
import { ref } from 'vue'

const router = useRouter()
const ability = useAppAbility()

// const userData = JSON.parse(localStorage.getItem('userData') || 'null')




const userData = ref( 
  '',
)

onMounted(() => {
  axiosIns.get('init/').then(res=>{
    userData.value = res.data.school.logo
  }).catch(err=>{
  })
})


const logout = 
   ref( window.document
     .querySelector("meta[name=base_logout]")
     .getAttribute("content") + "login?logout",
   )

// Remove "userData" from localStorage
// localStorage.removeItem('userData')

// // Remove "accessToken" from localStorage
// localStorage.removeItem('accessToken')
// router.push('/login').then(() => {

//   // Remove "userAbilities" from localStorage
//   localStorage.removeItem('userAbilities')

//   // Reset ability to initial ability
//   ability.update(initialAbility)
// })
</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    bordered
    color="success"
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"
    >
      <VImg
        v-if="userData "
        :src="userData"
      />
      <VIcon
        v-else
        icon="tabler-user"
      />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList>
          <!-- 👉 User Avatar & Name -->
          <VListItem>
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"
                  >
                    <VImg
                      v-if="userData && userData"
                      :src="userData"
                    />
                    <VIcon
                      v-else
                      icon="tabler-user"
                    />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>

            <VListItemTitle class="font-weight-semibold">
              {{ userData.fullName }}
            </VListItemTitle>
            <VListItemSubtitle>{{ userData.role }}</VListItemSubtitle>
          </VListItem>
          <!-- 👉 Logout -->

          
          <a
            :href="logout"
            class="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5"
          >
            <VIcon
              class="me-2"
              icon="tabler-logout"
              size="22"
            /> Se déconnecter
          </a>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
