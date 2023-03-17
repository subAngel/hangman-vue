<template>
	<div class="navbar bg-primary text-primary-content">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn btn-ghost lg:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h8m-8 6h16"
						/>
					</svg>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<RouterLink to="/game" class="btn btn-accent text-zinc-700"
							>Play<i class="fa-solid fa-play"></i
						></RouterLink>
					</li>
					<li>
						<RouterLink to="/" class="btn btn-ghost text-fuchsia-600"
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
						>Play<i class="fa-solid fa-play"></i
					></RouterLink>
				</li>
				<li>
					<RouterLink to="/" class="btn btn-ghost"
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

<script setup></script>

<style></style>
