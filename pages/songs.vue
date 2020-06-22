<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">最近新增</v-card-title>
			</v-card>
		</v-flex>
		<v-flex>
			<v-card>
				<v-card-title class="headline">轉換進度</v-card-title>
				<v-card-text>
					<v-simple-table fixed-header max-height="300px">
						<thead>
							<tr>
								<th class="text-left">名稱</th>
								<th class="text-left">進度</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in progress" :key="item.name">
								<td>{{ item.name }}</td>
								<td>{{ item.status }}</td>
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
		recent: [
			{
				name: "逼比探險記",
				img: "https://picsum.photos/1200/1200?5",
				author: "逼比",
				uuid: "biib1069"
			},
			{
				name: "逼比買了動物園",
				img: "https://picsum.photos/1200/1200?1",
				author: "逼比",
				uuid: "bibi1069"
			}
		],
		progress: [
			{
				name: "逼比探險記",
				status: "轉換中"
			},
			{
				name: "逼比買了動物園",
				status: "佇列中"
			}
		]
	})
};
</script>
