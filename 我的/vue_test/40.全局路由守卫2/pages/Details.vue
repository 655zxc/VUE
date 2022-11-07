<template>
    <ul>
        <li>{{$route.query.id}}具体内容:{{$route.query.content}}</li>
        <!-- 从$route接收参数 -->
    </ul>
</template>

<script>
export default {
    name:'Details',
}
</script>

<style>

</style>