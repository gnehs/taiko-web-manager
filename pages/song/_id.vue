<template>
	<v-layout column>
		<v-flex>
			<v-card>
				<v-card-title class="headline">Song</v-card-title>
				<v-card-text>{{songData}}</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
export default {
	data: () => ({
		songData: null
	}),
	activated() {
		this.getData()
	},
	created() {
		this.getData()
	},
	methods: {
		async getData() {
			let songId = this.$route.params.id
			let songData = await this.$axios(`/api/song/${songId}`)
			this.songData = songData.data
		}
	}
};
</script>
