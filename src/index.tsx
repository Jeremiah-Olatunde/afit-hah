import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { jsxRenderer } from "hono/jsx-renderer";

import { Base } from "./views/Base";
import { CounterCSR, CounterSSR } from "./views/Counter";
import { Login } from "./views/Login";

const app = new Hono();

const inMemoryDB = { count: 0 };

app.get("/page/*", jsxRenderer(Base, { docType: "<!DOCTYPE html>" }));
app.get("/page/home", (context) => context.render(<Home />));
app.get("/public/*", serveStatic({ root: "./src" }));

app.get("/htmx/counter", (context) => {
	return context.html(<span>{inMemoryDB.count++}</span>);
});

function Home() {
	return (
		<>
			<CounterSSR start={inMemoryDB.count} />
		</>
	);
}

export default app;
