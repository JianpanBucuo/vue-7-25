 Vue.component("button-counter",{
 	data:function(){
 		return{ count:0}
 	}
 ,
  template:`<button v-on:click="count++">Click Me{{count}} times </button> `
 })

 var buttonClick=new Vue({
						 	el:"#buttonClick",

						 })

 //Prop是你可以在组件上注册的一些自定义特性
 //当一个值传递给一个prop特性的时候，
 //它就变成了那个组件实例的一个属性。

 Vue.component("blog-post",{
 	props:["title"],
 	template:`
             <h3>{{title}}</h3>
 	`
 })
 new Vue({ 
    el:"#blogPost"
  })

 new Vue({
 	el:"#blog-post-demo",
 	data:{
 		post:[
          {id:0,title:'AAA'},
          {id:1,title:'BBB'},
          {id:2,title:'CCC'}
 		]
 	}
 })
 //当要传递的数据很多时，要重构一个这个组件

 Vue.component("newblog",{
 	props:["post"],
 	template:`
       <div class="blog">
         <h3>{{post.title}}</h3>
         <div v-html="post.content"></div>
       <button v-on:click="$emit('enlargetext',1)">Enlarge text</button>
       </div>
       
 	`
 })

 new Vue({
 	el:"#newBlog",
 	data:{
 		more:[
          {id:0,title:1,content:"First"},
          {id:1,title:2,content:"Second"},
          {id:2,title:3,content:"Third"}
 		]
 	}
 })

 //在我们开发blog-post组件时，
 //它的一些功能可能要求我们和父级组件进行沟通
 //我们可能会引入一个可访问的功能来非那根大博文的字号
 //同时让页面的其他部分保持默认的字号

 new Vue({
 	el:"#big",
 	data:{
 		s:[
        { id:0,title:"HTML",content:"CSS" },
        {id:1,title:"JavaScript",content:"Jquery"},
        {id:2,title:"Vue",content:"Welcome Vue!"}
 		],
 		testSize:1,
 	},
 	methods:{
 		onEnlargeText:function(amount){
 			this.testSize+=amount
 		}
 	}

 })

 //在组件上使用v-model
 //自定义事件也可以用于创建支持v-model的自定义输出组件

 //在组件上使用v-model
 //自定义事件也可以用于创建支持v-model的自定义输入组件
 new Vue({
 	el:"#test",
 	data:{
 		searchText:"a"
 	}
 })