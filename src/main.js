import { createApp } from "vue";
import "./index.css";
import "./normalize.css";
import App from "./App.vue";
import { router } from "./routes";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faPlay,
	faImages,
	faPlayCircle,
	faDeleteLeft,
	faBars,
	faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlayCircle, faImages, faPlay, faDeleteLeft, faBars, faCaretRight);

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.mount("#app");

// <font-awesome-icon :icon="['fas', 'play']" />
