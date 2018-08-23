<template>
  <Page class="page">
    <ScrollView class="page" ref="scrollView" @scroll="onScroll">
      <ActionBar class="action-bar" title="List">
        <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/home')"/>
      </ActionBar>

    <StackLayout>
      <my-button-group @tap1="log('1')" @tap2="log(2)" />

      <Label textWrap="true" class="p-10">
        <FormattedString>
          <Span :text="content" class="list-text" />
        </FormattedString>
      </Label>
    </StackLayout>
  </ScrollView>
  </Page>
</template>

<style scoped>
.list-text {
  font-size: 18px;
}
</style>

<script>
import MyButtonGroup from "./MyButtonGroup.vue";

import cheerio from "react-native-cheerio";
import { mapActions } from "vuex";
import fetchHtml from "../utils/fetchHtml";

export default {
  components: {
    MyButtonGroup
  },

  data() {
    return {};
  },

  computed: {
    content() {
      return this.$store.state.chapter.content;
    }
  },

  mounted() {
    // if (this.content !== "no content") {
    //   return;
    // }
    this.fetchContent().catch(console.error);
  },

  destroyed() {
    console.log("destroyed!!!");
  },

  methods: {
    onScroll() {},
    log(...args) {
      console.log(...args);
    },
    ...mapActions(["setContent"]),
    fetchContent() {
      return fetchHtml(
        "http://m.wuxiaworld.co/Library-of-Heaven-is-Path/1174148.html"
      ).then(html => {
        const $ = cheerio.load(html);
        const a = $("#chaptercontent").contents();
        const chapterContent = Array.prototype.map.call(a, x => {
          if (x.type === "tag" && x.name === "br") {
            return "\n";
          } else if (x.type === "text") {
            return x.data;
          }
          return "";
        });
        this.setContent(chapterContent.join(""));
      });
    }
  }
};
</script>