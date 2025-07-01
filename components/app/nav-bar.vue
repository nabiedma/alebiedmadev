<template>
	<nav class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container flex h-16 items-center justify-between">
			<a
				href="/"
				class="text-xl font-bold text-red-500 transition-colors"
			>
				DevBlog
			</a>
			<nav class="flex items-center space-x-6">
				<a href="/">
					<button
						variant="ghost"
						class="text-foreground hover:text-red-400"
					>
						Home
					</button>
				</a>
				<button class="btn">
					Button
				</button>
				<a href="/blog">
					<button
						variant="ghost"
						class="text-foreground hover:text-red-400"
					>
						Blog
					</button>
				</a>
				<ThemeToggle />
			</nav>
		</div>
	</nav>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
