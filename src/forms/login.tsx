import { z } from "zod";

const Message = z
	.object({
		studentId: z.string(),
		password: z.string(),
	})
	.strict();

type Message = z.infer<typeof Message>;
