import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { jsxRenderer } from "hono/jsx-renderer";

import { Base } from "./views/Base";
import { Login } from "./views/Login";

const app = new Hono();

app.get("/page/*", jsxRenderer(Base, { docType: "<!DOCTYPE html>" }));
app.get("/page/home", (context) => context.render(<Home />));
app.get("/public/*", serveStatic({ root: "./src" }));

function Home() {
	return (
		<>
			<Login />
		</>
	);
}

export default app;
