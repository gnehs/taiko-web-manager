<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">Categroies</v-card-title>
				<v-card-text>
					<v-simple-table fixed-header max-height="300px">
						<thead>
							<tr>
								<th class="text-left" width="10%">id</th>
								<th class="text-left">title</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in categories" :key="item.id">
								<td>{{ item.id }}</td>
								<td>{{ item.title }}</td>
							</tr>
						</tbody>
					</v-simple-table>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
export default {
	data: () => ({
		categories: [
		]
	}),
	activated() {
		this.getData()
	},
	created() {
		this.getData()
	},
	methods: {
		async getData() {
			let categoryList = await this.$axios('/api/category/all')
			this.categories = categoryList.data
		}
	}
};
</script>
