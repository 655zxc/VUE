<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ myAge + 1 }}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>


<script>
// 传入的参数 name sex age都会出现在vc里 但不会出现在_data里
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      msg: "我是一个尚硅谷的学生",
      myAge: this.age,
	//   接收到的props无法更改 想要修改 在data里用另外一个变量接收
	//   注意age要加this
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  //1.简单声明接收
  // props:['name','age','sex']
  // 接受app中使用student传进来的参数 传进来的都接受

  //2.接收的同时对数据进行类型限制
  /* props:{
			name:String,
			age:Number,
			sex:String
		} */

  //3.接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, //name的类型是字符串
      required: true, //name是必要的
    },
    age: {
      type: Number,
      default: 99, //默认值
    },
    sex: {
      type: String,
      required: true,
    },
  },
};
</script>