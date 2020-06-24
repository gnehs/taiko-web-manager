<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">Category</v-card-title>
				<v-card-text>{{categoryData}}</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
export default {
	data: () => ({
		categoryData: null
	}),
	activated() {
		this.getData()
	},
	created() {
		this.getData()
	},
	methods: {
		async getData() {
			let categoryId = this.$route.params.id
			let categoryData = await this.$axios(`/api/category/${categoryId}`)
			this.categoryData = categoryData.data
		}
	}
};
</script>
