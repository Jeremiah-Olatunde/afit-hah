import { z } from "zod";

const Message = z
	.object({
		studentId: z.string(),
		password: z.string(),
	})
	.strict();

type Message = z.infer<typeof Message>;

type MessageErr = {
	status: "error";
	messages: string[];
};

type MessageOk = {
	status: "ok";
	data: Message;
};

type MessageResult = MessageErr | MessageOk;

function toMessage(form: unknown): MessageResult {
	const parsed = Message.safeParse(form);

	if (!parsed.success) {
		return {
			status: "error",
			messages: parsed.error.issues.map((issue) => issue.message),
		};
	}

	return {
		status: "ok",
		data: parsed.data,
	};
}
