// 在组册一个组件的时候，我们始终需要给它一个名字。比如在全局组册的时候我们已经看到了.
 
 Vue.component("my-component-name",{

 });
//你给予组件的名字可能依赖于你打算拿它来做什么，
//当直接在DOM中使用一个组件(而不是在字符串模板或单文件组件)的时候
//强烈推荐遵循W3C规范中的自定义组件名(字母全小写且必须包含一个连字符)

Vue.component('component-a', {
  data:function(){
    return { count:0
    }
  },
  template:
      `<div><button v-on:click='count++'>Add one</button>
      <p>You clicked for {{count}} times</p></div>
      `
})
Vue.component('component-b', {
  data:function(){
    return { count:0
    }
  },
  template:
      `<div><button v-on:click='count++'>Add one</button>
      <p>You clicked for {{count}} times</p></div>
      `
})
Vue.component('component-c', {
  data:function(){
    return { count:0
    }
  },
  template:
      `<div><button v-on:click='count++'>Add one</button>
      <p>You clicked for {{count}} times</p></div>
      `
})

//全局组册往往是不够理想的。
//比如，如果你使用一个像webpack这样的构件系统，全局组册所有的组件意味着即便你已经不再使用一个组件了，
//它仍然会被包含在你最终的构件结果中。这就造成了用户下载的Javascript的无谓的增加。
//在这些情况下，你可以通过一个普通的Javascript对象来定义组件:
var componentA={

};
var componentB={

};
var componentC={

}
//然后在components选项中定义你想要使用的组件:


//如果你希望ComponentA在ComponentB中可用，则你需要这样写:
var ComponentA={};
var ComponentB={
	components:{
		"component-a":componentA
	}
}
Vue.component("blog-post",{
	props:["postTitle"],
	template:`<h3>{{postTitle}}</h3>`
})
new Vue({
	el:"#app"
})