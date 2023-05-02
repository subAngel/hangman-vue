import { createRouter, createWebHistory } from "vue-router";
import ManageWords from "./pages/ManageWords.vue";
import About from "./pages/About.vue";
import Game from "./pages/GameView.vue";

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
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export { router };
