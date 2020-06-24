<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">User</v-card-title>
				<v-card-text>{{userData}}</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
export default {
	data: () => ({
		userData: null
	}),
	activated() {
		this.getData()
	},
	created() {
		this.getData()
	},
	methods: {
		async getData() {
			let userId = this.$route.params.id
			let userData = await this.$axios(`/api/user/${userId}`)
			this.userData = userData.data
		}
	}
};
</script>
