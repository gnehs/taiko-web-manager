<template>
	<v-row justify="center">
		<v-card max-width="344" width="344" outlined>
			<v-list-item two-line>
				<v-list-item-content>
					<v-list-item-title class="headline mb-1">Hi!</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<v-list-item to="/user">
				<v-list-item-icon>
					<v-icon>mdi-account-music</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>User</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
			<v-divider />
			<v-list-item to="/song">
				<v-list-item-icon>
					<v-icon>mdi-music-note</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>Song</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-card>
	</v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
	components: {
		Logo,
		VuetifyLogo
	}
}
</script>
