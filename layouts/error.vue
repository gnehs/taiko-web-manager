<template>
	<v-layout column justify-center align-center>
		<v-flex xs12 sm8 md6>
			<v-alert text color="error" min-width="400">
				<h3 class="headline">{{error.statusCode === 404? pageNotFound:otherError }}</h3>
				<v-divider class="my-4 error" style="opacity: 0.22"></v-divider>
				<v-layout align-center>
					<v-spacer></v-spacer>
					<v-btn color="error" outlined nuxt to="/">Home</v-btn>
				</v-layout>
			</v-alert>
		</v-flex>
	</v-layout>
</template>

<script>
export default {
	layout: "empty",
	props: {
		error: {
			type: Object,
			default: null
		}
	},
	head() {
		const title =
			this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
		return {
			title
		};
	},
	data() {
		return {
			pageNotFound: "404 Not Found",
			otherError: "An error occued 🙁"
		};
	}
};
</script>

<style scoped>
	h1 {
		font-size: 20px;
	}
</style>
