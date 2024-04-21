import Home from "./routes/Home.svelte";
import AllHomework from "./routes/AllHomework.svelte";
import SingleHomework from "./routes/SingleHomework.svelte";

export default {
    '/': Home,
    '/hw': AllHomework,
    '/hw/:id': SingleHomework
}