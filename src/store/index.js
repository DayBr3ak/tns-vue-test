import Vue from "nativescript-vue";
import Vuex from "vuex";

import counter from "./modules/counter";
import chapter from "./modules/chapter";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

const store = new Vuex.Store({
  modules: {
    counter,
    chapter
  },
  strict: debug
});

Vue.prototype.$store = store;

module.exports = store;

class AA extends android.database.sqlite.SQLiteOpenHelper {
  onCreate(db) {
    console.log(db);
  }
}

console.log("---");
console.log(new AA(getApplicationContext()));
console.log("---");
