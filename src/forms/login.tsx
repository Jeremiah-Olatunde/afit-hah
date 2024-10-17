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

const Model = z
	.object({
		studentId: z
			.string()
			.length(10)
			.regex(/^\d{10}$/, "Student ID must be 10 digits long"),
		password: z.string().min(5),
	})
	.strict();

type Model = z.infer<typeof Model>;

type FieldOk = {
	status: "ok";
	value: string;
};

type FieldErr = {
	status: "error";
	value: string;
	messages: string[];
};

type FieldResult = FieldErr | FieldOk;

function validateStudentId(value: Message["studentId"]): FieldResult {
	const parsed = z
		.string()
		.length(10)
		.regex(/^\d{10}$/, "Student ID must be 10 digits long")
		.safeParse(value);

	if (parsed.success) {
		return {
			status: "ok",
			value,
		};
	}

	return {
		status: "error",
		value,
		messages: parsed.error.issues.map(({ message }) => message),
	};
}

function validatePassword(value: string): FieldResult {
	const parsed = z.string().min(5).safeParse(value);

	if (parsed.success) {
		return {
			status: "ok",
			value,
		};
	}

	return {
		status: "error",
		value,
		messages: parsed.error.issues.map(({ message }) => message),
	};
}
