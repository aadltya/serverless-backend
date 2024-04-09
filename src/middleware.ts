import { Hono, Next } from "hono";
import { Context } from "hono/jsx/dom";

const app = new Hono();

app.use( async (c, next) => {
    if(c.req.header("Authorization")) {
        //Do some validations
        await next();
    } else {
        return c.text("You dont have access")
    }
})

app.get('/', async (c) => {
    const body = await c.req.parseBody()
    console.log(body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param"));

    return c.json({msg: "ok"})
})

export default app
