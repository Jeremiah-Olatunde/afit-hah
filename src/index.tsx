import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { jsxRenderer } from "hono/jsx-renderer";
import { logger } from "hono/logger";

import { Base } from "./views/Base";

import { LoginForm, loginDefault, loginValidate } from "./login";
import { LoginPage } from "./views/Login";

const app = new Hono();

app.use(logger());
app.get("/page/*", jsxRenderer(Base, { docType: "<!DOCTYPE html>" }));
app.get("/public/*", serveStatic({ root: "./src" }));

app.get("/page/login", (context) => context.render(<LoginPage />));

app.get("/forms/login", (context) =>
	context.render(
		LoginForm(loginValidate({ studentId: "181203040", password: "Password@" })),
	),
);
app.post("/forms/login", async (context) => {
	console.log(await context.req.formData());
	return context.render("cool");
});

export default app;
