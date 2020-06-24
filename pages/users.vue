<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">Users</v-card-title>
				<v-card-text>
					<v-simple-table fixed-header max-height="300px">
						<thead>
							<tr>
								<th class="text-left" width="10%">level</th>
								<th class="text-left">username</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in users" :key="item.name" @click="$router.push('/user/'+item._id)">
								<td>{{ item.user_level }}</td>
								<td>{{ item.username }}</td>
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
		users: [
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
			let userList = await this.$axios('/api/user/all')
			this.users = userList.data
		}
	}
};
</script>

