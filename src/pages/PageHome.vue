<template>
  <q-page class="realtive-position">
    <q-scroll-area class="absolute full-width full-height">
    <div class="q-py-lg q-px-md row items-end q-col-gutter-sm">
      <div class="col">
        <q-input
      bottom-slots
      v-model="newQWeetContent"
      class="new-qweet"
      placeholder="Salut, la ce te gândești?"
      counter
      maxlength="250"
      autogrow
      >
        <template v-slot:before>
          <q-avatar size="xl">
            <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg">
          </q-avatar>
        </template>
      </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          @click="addNewQweet"

          class="q-mb-lg"
          outline
          rounded
          color="primary"
          label="Qweet"
          unelevated
          no-caps
          />
      </div>
    </div>

  <q-separator
  class="divider"
  size="10px"
  color="grey-2"
  />

  <q-list separator>
    <transition-group
    appear
    enter-active-class="animated fadeIn slow"
    leave-active-class="animated fadedOut slow"
    >
      <q-item
      v-for="qweet in qweets"
      :key="qweet.id"
      class="qweet q-py-md"
      >
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Ionut Cipleu</strong>
            <span class="text-grey-7">
              ionut_88
              <br class="lt-md">&bull; {{ qweet.date | relativeDate }}
            </span>
          </q-item-label>
          <q-item-label
          class="qweet-content text-body1">
          {{ qweet.content }}</q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
      <q-btn
        @click="toggleLiked(qweet)"
        :color="qweet.liked ? 'pink' : 'grey'"
        :icon="qweet.liked ? 'fas fa-heart' : 'far fa-heart'"
        size="sm"
        icon="far fa-heart"
        flat
        round
      />
      <q-btn
        color="grey"
        size="sm"
        icon="far fa-comment"
        flat
        round
      />
      <q-btn
        color="grey"
        size="sm"
        icon="fas fa-retweet"
        flat
        round
      />
      <q-btn
      @click="deleteQweet(qweet)"
        color="grey"
        size="sm"
        icon="fas fa-trash"
        flat
        round
      />
    </div>
        </q-item-section>

        <q-item-section side top>

        </q-item-section>
      </q-item>
      </transition-group>
  </q-list>
</q-scroll-area>
</q-page>
</template>

<script>

import { formatDistance } from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: '',
      qweets: [
      {
        id: 'ID1',
        content: 'Be your own hero, its cheaper than a movie ticket.',
        date: 1611653238221,
        liked: false
        },
        {
        id: 'ID2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo id viverra consequat. Integer feugiat lorem faucibus est ornare scelerisque. Donec tempus, nunc vitae semper sagittis, odio magna semper ipsum, et laoreet sapien mauris vitae arcu.',
        date: 1611653252444,
        liked: true
        },
      ]
    }
},
methods: {
  addNewQweet() {
    let newQweet = {
      content: this.newQweetContent,
      date: Date.now()
    }
    this.qweets.unshift(newQweet)
  },
  deleteQweet(qweet) {
    let dateToDelete = qweet.date
    let index = this. qweets.findIndex(qweet => qweet.date === dateToDelete)
    this.qweets.splice(index, 1)
  }
},
filters: {
  relativeDate(value) {
return formatDistance(value, new Date())
    }
  },
}
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
  .qweet-content
    white-space: pre-line
    .qweeti-icons
      margin-left: -5px
</style>
