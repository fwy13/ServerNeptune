import Koa from "koa"
import Router from "koa-router"
import getAnimeHome from "./logic/getAnimeHome";



const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
    const res = await fetch("https://animevietsub.ink/").then(data => data.text());
    ctx.body = getAnimeHome(res);
})
app.use(router.routes());
app.listen(3000);