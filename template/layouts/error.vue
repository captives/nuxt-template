<template>
    <div style="font-size: 5cm; text-align: center">404</div>
</template>
<script>
export default {
    asyncData(ctx) {
        // 尽量使用try catch的写法，将所有异常都捕捉到
        try {
            throw new Error();
        } catch (err) {
            ctx.$errorHandler(err);
        }
    },
};
</script>