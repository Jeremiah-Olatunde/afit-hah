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
			<div class="w-screen h-screen grid items-center justify-center">
				<div x-data="{ count: 0 }" class="flex gap-2">
					<button
						x-on:click="count++"
						class="bg-red-400 rounded-md px-4 py-2 text-3xl text-white font-bold"
					>
						increment
					</button>
					<div
						x-text="count"
						class="bg-blue-400 text-3xl px-4 py-2 text-white font-bold rounded-md"
					></div>
				</div>
			</div>
		</>
	);
}

export default app;
