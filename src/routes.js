import { createRouter, createWebHistory } from "vue-router";
import ManageWords from "./pages/ManageWords.vue";
import About from "./pages/About.vue";
import Game from "./pages/Game.vue";

const routes = [
	{
		path: "/",
		component: ManageWords,
	},
	{
		path: "/game",
		component: Game,
	},
	{
		path: "/about",
		component: About,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
