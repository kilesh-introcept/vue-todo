<template>
    <div class="bg-white p-4 shadow flex justify-between">
        <div>Logo</div>
        <div>
            <router-link to="/">Todo List</router-link>
            <router-link to="/covid">Covid Tracker</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
}
</script>