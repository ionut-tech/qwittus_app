<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-green">
      <q-toolbar>

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{ $route.name }}</span>
          <q-icon
        class="header-icon q-pa-md lt-md"
        name="fas fa-dove"
        size="sm"
        color="green"
            />

        </q-toolbar-title>
        <q-btn-dropdown
          split
          to="/pages/LogOut.vue"
          color="primary"
          rounded
          label="Log Out"
            >
      <q-list>
        <q-item
        clickable
        v-close-popup>

          <q-item-section>
            <q-item-label>Edit Profile</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
        clickable
        v-close-popup>

          <q-item-section>
            <q-item-label>Switch Account</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>Send Feedback</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
        <q-avatar>
            <img
            @click= src/pages/Preferences.vue
            src="https://www.citypng.com/public/uploads/preview/hd-profile-user-round-green-icon-symbol-transparent-png-11639594320ayr6vyoidq.png"
            fixed-top-right-center
            >
          </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
    v-model="left"
    side="left"
    :width="283"
    bordered
    show-if-above
    >

    <q-icon
      class="header-icon q-pa-md lt-md"
        name="fas fa-dove"
        size="lg"
        color="green"
        />

    <q-list>
      <q-item
      to="/"
      clickable
      v-ripple
      exact
      >

        <q-item-section avatar>
          <q-icon
          name="cottage"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
      <q-item
      to="/notif"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="notifications"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Notifications</q-item-section>
      </q-item>

      <q-item
      to="/news"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="feed"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">News</q-item-section>
      </q-item>

      <q-item
      to="/games"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="extension"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Games</q-item-section>
      </q-item>

      <q-item
      to="/roll"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="sync"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Roll</q-item-section>
      </q-item>

      <q-item
      to="/pref"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="style"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Preferences</q-item-section>
      </q-item>

      <q-item
      to="/more"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="more"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">More</q-item-section>
      </q-item>

      <q-item
      to="/about"
      clickable
      v-ripple
      exact
      >
        <q-item-section avatar>
          <q-icon
          name="info"
          size="md"
          />

        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer
    show-if-above
    v-model="rightDrawerOpen"
    side="right"
    bordered
    >

    <q-input
    placeholder="Search on Qwittus"
    class="q-ma-md"
    outlined
    rounded
    dense
    >

        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
  <q-list
  separator
  padding>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline
          class="text-grey">Education</q-item-label>
          <q-item-label
          class="text-weight-bold">Something new!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item q-pa-md>
        <q-item-section>
          <q-item-label overline
          class="text-grey">Cars</q-item-label>
          <q-item-label
          class="text-weight-bold">Something new!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

      <q-item q-pa-md>
        <q-item-section>
          <q-item-label overline
          class="text-grey">Food</q-item-label>
          <q-item-label
          class="text-weight-bold">Something new!</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<!-- <style lang="sass">
.header-icon
position: absolute
bottom: 0
left: 50%
transform: translateX(-50%)
</style>
-->
