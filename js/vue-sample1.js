var app = new Vue({
    el: '#title',
    data: {
        title: 'Hello, World!'
    }
});

// 属性の変更
var app2 = new Vue({
    el: '#body',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: "#app-3",
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Vue' },
            { text: 'Learn loop' },
            { text: 'learn for directive' }
        ]
    }
})
app4.todos.push({ text: 'New item' });

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'v-model 双方向バインディング（v-model属性が記述されたタグ内のデータはjs側、ユーザー入力側の両方から変更される）'
    }
})

Vue.component('todo-item', {
  props: ['t1'],
  template: '<li>{{ t1.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

Vue.component('watch-sample', {
  props: ['val'],
  template: '<p>{{ val.m1 }} {{ val.m2 }}</p>'
})

var app8 = new Vue({
  el: '#app-8',
  data: {
    message: {
        m1: "watchテスト",
        m2: "watchテスト2"
    }
  }
})
app8.$watch('message', function (newValue, oldValue) {
    // このコールバックは `app7.groceryList` の値が変わる時に呼ばれます
    console.log('old: ', oldValue, ', new: ', newValue);
})
// app8.$data.message = "watchテスト実行"

Vue.component('header-component', {
    props: ['val', 'val2'],
    template: `
    <header>
        <h1>{{ val }}</h1>
        <div>{{ val2 }}</div>
    </header>
    `
})
var app9 = new Vue({
    el: "#app-9",
    data: {
        title: 'Study Vue.js!',
        subTitle: 'part1'
    }
})
