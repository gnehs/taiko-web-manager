<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">Songs</v-card-title>
				<v-card-text>
					<v-simple-table fixed-header max-height="300px">
						<thead>
							<tr>
								<th class="text-left" width="10%">id</th>
								<th class="text-left">title</th>
								<th class="text-left">category</th>
								<th class="text-left">type</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in songs" :key="item.name" @click="$router.push('/song/'+item._id)">
								<td>{{ item.id }}</td>
								<td>{{ item.title }}</td>
								<td>{{ categories[item.category_id] }} ({{item.category_id}})</td>
								<td>{{ item.type }}</td>
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
		songs: [],
		categories: {}
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
			categoryList.data.map(x => this.categories[x.id] = x.title)
			let songList = await this.$axios('/api/song/all')
			this.songs = songList.data
		}
	}
};
</script>
