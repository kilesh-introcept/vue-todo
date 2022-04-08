<template>
    <div class="w-screen h-screen bg-black absolute top-0 left-0 grid items-center justify-center bg-opacity-60">
        <div class="bg-white rounded p-4 shadow w-30r">
            <!-- header -->
            <div class="">
                 Todo List Detail
            </div>
            <div>Body</div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Modal",
    props:['todo'],
}
</script>