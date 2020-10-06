<template>
  <v-card outlined elevation="2" class="mx-auto mt-5" max-width="800">
    <v-card-text>
      <v-row>
        <v-col cols="3">
          <v-img
            class="rounded-circle"
            :src="image"
            alt="User image"
            width="180"
          ></v-img>
        </v-col>
        <v-col cols="9" class="text-left">
          <v-row class="text-lg-h3 text-h4">{{ name }}</v-row>
          <v-row class="text-h5">@{{ username }}</v-row>
          <v-row class="ml-n5">
            <v-col>
              <v-chip
                v-for="(feat, idx) in features"
                :key="idx"
                color="purple"
                class="mr-2 mb-2"
                outlined
              >
                <v-icon left> mdi-fire </v-icon>
                {{ feat }}
              </v-chip>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="6" class="text-body-1">
          <v-row class="black--text" justify="center">
            <router-link :to="followersLink"
              >{{ followerCount }} followers</router-link
            >
          </v-row>
          <v-row class="black--text" justify="center">
            <router-link :to="followingLink"
              >{{ followingCount }} following</router-link
            >
          </v-row>
        </v-col>
        <v-col cols="6">
          <v-row v-if="isFriend" class="pt-1 px-3">
            <v-btn
              color="error"
              elevation="2"
              outlined
              class="mr-5"
              @click="sendMessage()"
            >
              Message
              <v-icon right>mdi-send-outline</v-icon>
            </v-btn>
            <v-btn
              color="error"
              elevation="2"
              outlined
              @click="isFriend = !isFriend"
            >
              Unfollow
              <v-icon right>mdi-account-off</v-icon>
            </v-btn>
          </v-row>
          <v-row v-if="!isFriend" justify="center">
            <v-btn
              color="error"
              elevation="2"
              outlined
              class="mr-3"
              @click="isFriend = !isFriend"
            >
              Follow
              <v-icon right>mdi-account-plus</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-divider class="my-3" />
      <v-row v-if="bdate" class="text-body-1 black--text mx-auto mt-2">
        <v-icon class="mr-2" large color="deep-orange accent-4">
          mdi-calendar
        </v-icon>
        <span class="my-1">{{ bdate }}</span>
      </v-row>
      <v-row v-if="location" class="text-body-1 black--text mx-auto mt-2">
        <v-icon class="mr-2" large color="deep-orange accent-4">
          mdi-map-marker
        </v-icon>
        <span class="my-1">{{ location }}</span>
      </v-row>
      <v-row v-if="job" class="text-body-1 black--text mx-auto mt-2">
        <v-icon class="mr-2" large color="deep-orange accent-4">
          mdi-account-tie
        </v-icon>
        <span class="my-1">{{ job }}</span>
      </v-row>
      <v-row v-if="school" class="text-body-1 black--text mx-auto mt-2">
        <v-icon class="mr-2" large color="deep-orange accent-4">
          mdi-school
        </v-icon>
        <span class="my-1">{{ school }}</span>
      </v-row>
      <v-row v-if="website" class="text-body-1 black--text mx-auto mt-2">
        <v-icon class="mr-2" large color="deep-orange accent-4">
          mdi-web
        </v-icon>
        <a class="my-1" :href="website">{{ website }}</a>
      </v-row>
      <v-row v-if="twitter" class="text-body-1 black--text mx-auto mt-2">
        <v-icon class="mr-2" large color="deep-orange accent-4">
          mdi-twitter
        </v-icon>
        <a class="my-1" :href="twitterLink">@{{ twitter }}</a>
      </v-row>
      <v-divider class="my-3" />
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header dark> Bio </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <v-snackbar v-model="snackbar">
        {{ snackbarMsg }}
        <template v-slot:action="{ attrs }" timeout="3">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    image: "https://github.com/mertturkmenoglu.png",
    name: "Mert Turkmenoglu",
    username: "capreaee",
    location: "Istanbul",
    features: [
      "Programmer",
      "#TeamSquirrel",
      "Kotlin",
      "Vue<3",
      "Little Thumbelina Girl",
    ],
    bdate: "01 January 1900",
    school: "YTU Computer Engineering",
    job: "Software Engineer",
    isFriend: true,
    snackbar: false,
    snackbarMsg: "",
    followerCount: 42,
    followingCount: 13,
    website: "https://mertturkmenoglu.github.io/",
    twitter: "capreaee",
  }),
  computed: {
    twitterLink() {
      if (this.twitter) {
        return `https://twitter.com/${this.twitter}`;
      }

      return "/";
    },
    followersLink() {
      if (this.username) {
        return `/${this.username}/followers`;
      }

      return "/";
    },
    followingLink() {
      if (this.username) {
        return `/${this.username}/following`;
      }

      return "/";
    },
  },
  methods: {
    sendMessage() {
      this.snackbarMsg = "Send Message clicked";
      this.snackbar = true;
    },
  },
};
</script>

<style>
</style>