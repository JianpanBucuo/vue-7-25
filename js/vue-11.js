Vue.component("button-counter",{
  data:function(){
    return { count:0
    }
  },
  template:
      `<div><button v-on:click='count++'>Add one</button>
      <p>You clicked for {{count}} times</p></div>
      `
})
new Vue({
  el:"#button",
})