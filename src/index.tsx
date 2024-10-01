import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { jsxRenderer } from "hono/jsx-renderer";

import { Base } from "./views/Base";

const app = new Hono();

app.get("/page/*", jsxRenderer(Base, { docType: "<!DOCTYPE html>" }));
app.get("/page/home", (context) => context.render(<Home />));
app.get("/public/*", serveStatic({ root: "./src" }));

function Home() {
	return (
		<>
			<AlpineCounter />
		</>
	);
}

function AlpineCounter() {
	return (
		<>
			<div x-data="{ count: 0 }">
				<button x-on:click="count++">Increment</button>

				<span x-text="count"></span>
			</div>
		</>
	);
}

export default app;
