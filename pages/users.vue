<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">Users</v-card-title>
				<v-card-text>
					<v-simple-table fixed-header max-height="300px">
						<thead>
							<tr>
								<th class="text-left">username</th>
								<th class="text-left">display name</th>
								<th class="text-left">Level</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in users" :key="item.name">
								<td>{{ item.username }}</td>
								<td>{{ item.display_name }}</td>
								<td>{{ item.user_level }}</td>
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

