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
					<title>Hello JSX + Hono</title>
				</head>
				<body>{children}</body>
			</html>
		</>
	);
}
