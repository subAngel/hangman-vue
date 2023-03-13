<template>
	<div class="container">
		<h2 class="text-center text-5xl mt-3">Manage Words</h2>
		<div class="flex justify-center mt-5 items-center">
			<h2 class="text-xl mr-3">Add new word:</h2>
			<input
				type="text"
				placeholder="Word"
				class="input input-bordered input-primary w-full max-w-xs mr-3"
			/>
			<button class="btn btn-primary">Add</button>
		</div>
	</div>

	<div class="container flex justify-center mt-7">
		<div class="alert shadow-lg w-60">
			<div>
				<i class="fa-solid fa-caret-right"></i>
				<div>
					<h3 class="font-bold">Guacamole</h3>
				</div>
			</div>
			<div class="flex-none">
				<button class="btn btn-ghost btn-sm">
					<i class="fa-sharp fa-solid fa-delete-left"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup></script>
