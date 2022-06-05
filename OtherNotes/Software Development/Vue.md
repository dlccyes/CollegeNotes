---
layout: meth
parent: Software Development
---
# Vue
{: .no_toc }

<details open markdown="block">
  <summary>
    Outline
  </summary>
- TOC
{:toc}
</details>

## CLI
It's succeeded by Vite.

```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

```
yarn global add @vue/cli-service
```
in `node_modules/.bin/vue-cli-service`
run with `npx vue-cli-service`


## init
### Install Node.js
See [NodeJs](NodeJs)

```
sudo apt install nodejs npm
```

### Create vue project

#### With vue-cli-service

```
npm create <your project>
```

#### With Vite

In your project root, run 
```
npm init vue@latest
```

If there's an error, try update node to the latest version, open a new shell and run again. See [NodeJs](NodeJs).

```
npm cache clean -f
npm install -g n
sudo n latest
```

## import

`@` = `/src`

It's defined in `vue.config.js` or `vite.config.js`

e.g. 

```vue
// they are the same
import Students from '@/components/Students.vue'
import Students from '/src/components/Students.vue'
```

## environmental variables

<https://vitejs.dev/guide/env-and-mode.html>

## Pinia

State management tool for Vue, successor of Vuex.

Example  
<https://codesandbox.io/s/pinia-vue-3-axios-interceptor-6jf11?file=/src/main.js>

### Init

Install pinia.

```
yarn add pinia
```

Add `app.use(pinia)` in `main.js`

```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
```

### Create a store

In `src/stores/useStore.js`

```
import { defineStore } from 'pinia'

export const useStore = defineStore({
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
```

### Use your store

To access & modify the store in a random component

First import it.

```
import { useStore } from '@/stores/useStore'
```

Then you can directly use it.

```
  methods: {
    test() {
	  // useStore().counter++
      const haha = useStore();
      haha.counter++;
      console.log(haha.counter);
    }
  }
```

Or you can declare it with

```
  data() {
    return {
      haha: useStore()
    }
  },
```

or

```
  setup() {
    const haha = useStore();
    return {
      haha,
    }
  },
```

Now you can access it with `this.haha` like a normal component data.

### Watch your store

```vue
<script>
export default {
  computed: {
    timeRange(){
      return this.globe.timeRange;
    },
  },
  watch: {
    timeRange(newVal, oldVal) {
      // do something
    }
  },
}
</script>
```

You can also use is directly as key

```vue
<Attendance :key="[update, globe.timeRange]"/>
```

## routing

[vue-router doc](https://router.vuejs.org/introduction.html)  
[a nice tutorial](https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/)

Install `vue-router`

```
npm install vue-router@4
#OR
yarn add vue-router@4
```

Define routes in `src/main.js`

```Javascript
import { createApp } from 'vue'
import App from '@/App.vue'
// import router from '@/router'

import { createRouter, createWebHistory } from 'vue-router'
import Students from '@/views/Students_blade.vue'
import Home from '@/views/Home_blade.vue'
const routes = [
  { path: '/', component: Home},
  { path: '/students', component: Students },
  { path: "/:pathMatch(.*)", name: "not-found", component: Invalid },
];
const router = createRouter({
  history: createWebHistory(),
  // history: createWebHashHistory(),
  routes,
});
// export default router;

// createApp(App).use(router).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
```

You can put the routes in `/src/router.js` and import it to make it cleaner.

To show the html of the routing target

```
<router-view />
```

You can put it in `index.html` or `App.vue`. Without this, the routing you've defined will do exactly nothing.

### base url

Give base url in `createWebHistory()` (or `createWebHashHistory()`. 

If you use vite, then it's

```
createWebHistory(import.meta.env.BASE_URL)
```

<https://github.com/vitejs/vite/issues/2114#issuecomment-782727527>

### fallback route

```
const routes = [
  { path: "/:pathMatch(.*)", name: "not-found", component: Invalid },
];
```

### Link to route

To link to this route,

```
{ path: '/std/:id', name: "student", component: Student },
```

Do this. It will match to the route with the same `name` and pass the `params`.

```
<router-link :to="{name: 'student', params: {id: student.student_id}}"> {{ student.student_name }}</router-link>
```

### history mode

It defines how your url will look like. With HTML5 mode, url will look like `domain/path`. With hash mode, url will look like `domain/#/path`. See the comparison below.

- HTML5
	- command: `createWebHistory`
	- pros: url looks natural
	- cons: can't be directly accessed (because you don't actually have a file in that route)
- Hash
	- command: `createWebHashHistory`
	- pros: can be directly accessed
	- cons: url is different from the norm

There's also a memory mode, which doesn't change the url at all.

[doc](https://router.vuejs.org/guide/essentials/history-mode.html)

### parameters

`$route.params.<key>` to access url variables

`$route.name` to access the route name

e.g.  
For `{ path: '/std/:id', name: "student", component: Data }`,  
`$route.params.id` = the id  
`$route.name` = "student"

## export default

### data

Define values

```
  data() {
    return {
      update: 0,
      globe:  globeStore(),
    }
  },
```

### computed

define values that need to be computed

will automatically be recomputed

```
  computed: {
    val1(){
      // complicated computations
      // return value
    },
  },
```

### methods

Define functions

```
  methods: {
    func1() {
      // something
    },
    func2() {
      // something
    },
  },
```

### mounted

execute when first load

```
mounted(){
  // something
}
```

## directive
### v-bind
To access data value in html tag, shorthand to `:`

### v-on
Event listener, shorthand to `@`.

### v-model
<input `v-model:"haha"`> will automatically make `haha` = input value

### v-if

### v-for

```vue
<div>
<ul>
  <li v-for="student in students">
	{{ student['student_id'] }} {{ student['student_name'] }}
  </li>
</ul>
</div>
```

## refresh

```vue
<span :key="text">{{ text }}</span>
```

When `text` is changed, this element will be refreshed.

Can also watch multiple variables.

```vue
<span :key="[text1, text2]">{{ text1 }}</span>
```

You can manipulate it and put it on `<router-view />` to refresh the page, or on whatever component to refresh that component, for example.

```vue
<script setup>
import Students from '@/components/Students.vue'
import Attendance from '../components/Attendance.vue';
</script>
<script>
export default {
  data() {
    return {
      update: 0,
    }
  },
  methods: {
    refresh() {
      this.update++;
    }
  }
}
</script>
<template>
<h1>Current State of the Classroom</h1>
<button class='btn' id="refresh" @click="refresh()">refresh</button>
<h2>Attendance</h2>
<Attendance :key="update"/>
<h2>Specific Students</h2>
<Students :key="update"/>
</template>
```

<https://stackoverflow.com/a/54367510/15493213>

## run locally

With Vite

```
npm run dev
```

## build for production

```
npm run build
```

It will produce static files in `dist/`. To host your vue app, push these static files to whatever hosting option you like.

To disable file name hashing, add this in `vite.config.js` in `defineConfig`

```
build: {
  rollupOptions: {
    output: {
      entryFileNames: `assets/[name].js`,
      chunkFileNames: `assets/[name].js`,
      assetFileNames: `assets/[name].[ext]`
    }
  }
}
```

or if you use vue-cli, see <https://cli.vuejs.org/config/#filenamehashing>.

## With Flask

Modify Flask's template folder & static folder to vue's.

```
app = Flask(__name__, template_folder="vue/dist", static_folder="vue/dist/assets")
```

## IDE

VsCode with Volar extension

## sample
```vue
<script>
let id = 3;
let sample = {};
for(let i=0; i<id; i++){
  sample[i] = "sample " + i;
}

export default {
  data() {
    return {
      newTodo: '',
      todos: sample,
    }
  },
  methods: {
    addTodo() {
      this.todos[id++] = this.newTodo
    },
    removeTodo(id) {
      console.log(id)
      delete(this.todos[id])
    }
  }
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
  </form>
  <ul>
    <li v-for="(text, id) in todos" :key="id">
      {{text}} {{id}}
      <button @click="removeTodo(id)">X</button>
    </li>
  </ul>
</template>
```

## Troubleshooting
### yarn dependency problem
ignore engines temporarily

```
yarn --ignore-engines
```

or

```
yarn config set ignore-engines true
```

<https://github.com/vuejs/vue-cli/issues/7116>