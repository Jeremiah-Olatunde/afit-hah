import type { PropsWithChildren } from "hono/jsx";

export function Base({ children }: PropsWithChildren) {
	return (
		<>
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<link rel="stylesheet" href="/public/output.css" />
					<script
						defer
						src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
					/>
					<script
						src="https://unpkg.com/htmx.org@2.0.2"
						integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ"
						crossorigin="anonymous"
					/>
					<title>Hello JSX + Hono</title>
				</head>
				<body>{children}</body>
			</html>
		</>
	);
}
