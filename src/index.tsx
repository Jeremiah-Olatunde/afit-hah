import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { jsxRenderer } from "hono/jsx-renderer";

import { Base } from "./views/Base";

const app = new Hono();

app.get("/page/*", jsxRenderer(Base, { docType: "<!DOCTYPE html>" }));
app.get("/page/home", (context) => context.render("Hello Afit"));
app.get("/public/*", serveStatic({ root: "./src" }));

export default app;
