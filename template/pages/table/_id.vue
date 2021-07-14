<template>
    <div>动态路由页面</div>
</template>
<script>
export default {
    validate({ params }) {
        console.log(params);
        return /^\d+$/.test(params.id);
    },
};
</script>