<template>
	<v-layout column justify-center align-center>
		<v-flex xs12 sm4 md3>
			<v-card max-width="344" width="344" outlined>
				<v-card-text>
					<v-list-item two-line>
						<v-list-item-content>
							<v-list-item-title class="headline mb-1">Taiko Web Manager</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
					<v-divider />
					<v-list-item to="/user">
						<v-list-item-title>User</v-list-item-title>
					</v-list-item>
					<v-divider />
					<v-list-item to="/song">
						<v-list-item-title>Song</v-list-item-title>
					</v-list-item>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
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
