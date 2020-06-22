<template>
	<v-app>
		<v-navigation-drawer v-model="drawer" clipped fixed app>
			<v-list shaped>
				<v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title v-text="item.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-app-bar clipped-left fixed app color="primary" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Taiko Web Manager</v-toolbar-title>
			<v-spacer />
			<v-btn text icon @click.stop="changetheme">
				<v-icon>mdi-theme-light-dark</v-icon>
			</v-btn>
		</v-app-bar>
		<v-content>
			<v-container grid-list-md>
				<nuxt />
			</v-container>
		</v-content>
		<!--<v-footer app>
			<span>&copy; 2019</span>
		</v-footer>-->
	</v-app>
</template>
<style lang="sass">
@import "~/assets/style.sass"
</style>

<script>
export default {
	data: () => ({
		drawer: null,
		items: [
			{
				icon: "mdi-home",
				title: "Home",
				to: "/"
			},
			{
				icon: "mdi-account-music",
				title: "Users",
				to: "/users"
			},
			{
				icon: "mdi-music-note",
				title: "Songs",
				to: "/songs"
			},
			{
				icon: "mdi-music-note",
				title: "Categories",
				to: "/categories"
			},
		]
	}),
	methods: {
		changetheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		}
	}
};
</script>
