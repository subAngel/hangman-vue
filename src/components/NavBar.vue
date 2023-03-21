<template>
	<div class="navbar bg-primary text-primary-content">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<font-awesome-icon :icon="['fas', 'bars']" size="xl" />
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<RouterLink to="/game" class="btn btn-accent text-zinc-700">
							Play<font-awesome-icon :icon="['fas', 'play']" />
						</RouterLink>
					</li>
					<li>
						<RouterLink
							to="/"
							class="btn btn-ghost text-fuchsia-600 mt-2"
							>Manage words</RouterLink
						>
					</li>
				</ul>
			</div>
			<RouterLink to="/" class="btn btn-ghost normal-case text-xl"
				>Hangman Game</RouterLink
			>
		</div>
		<div class="navbar-center hidden lg:flex">
			<ul class="menu menu-horizontal px-1">
				<li>
					<RouterLink to="/game" class="btn btn-accent text-zinc-700"
						>Play<font-awesome-icon :icon="['fas', 'play']" bounce
					/></RouterLink>
				</li>
				<li>
					<RouterLink to="/" class="btn btn-ghost ml-4"
						>Manage words</RouterLink
					>
				</li>
			</ul>
		</div>
		<div class="navbar-end">
			<RouterLink to="/about" class="btn glass text-gray-800"
				>About</RouterLink
			>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		reRender() {
			window.location.reload();
		},
	},
};
</script>

<style></style>
