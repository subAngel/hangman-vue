<template>
	<div class="h-screen overflow-hidden">
		<NavBar />
		<main class="h-full">
			<RouterView />
			<!-- <ManageWords /> -->
		</main>
	</div>
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import ManageWords from "./pages/ManageWords.vue";
</script>

<style></style>
