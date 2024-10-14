type FormFieldDefault = {
	value: string;
	name: string;
	label: string;
	group: "input";
	type: "email" | "text" | "password";
	validated: false;
};

type FormFieldValidated = {
	value: string;
	name: string;
	label: string;
	group: "input";
	type: "email" | "text" | "password";
	validated: true;
	validation: {
		level: "valid" | "warning" | "error";
		messages: string[];
	};
};

type FormField = FormFieldValidated | FormFieldDefault;

type FormModel = {
	name: string;
	fields: FormField[];
};

type FormMessage = {
	studentId: string;
	password: string;
};

export function loginValidate({ studentId, password }: FormMessage): FormModel {
	return {
		name: "login",
		fields: [
			{
				value: studentId,
				name: "studentId",
				label: "student id",
				group: "input",
				type: "text",
				validated: true,
				validation: {
					level: "valid",
					messages: ["student id does not exist"],
				},
			},
			{
				value: password,
				name: "password",
				label: "password",
				group: "input",
				type: "password",
				validated: true,
				validation: {
					level: "error",
					messages: ["incorrect password"],
				},
			},
		],
	};
}

export const loginDefault: FormModel = {
	name: "login",
	fields: [
		{
			name: "studentId",
			type: "text",
			group: "input",
			validated: false,
			value: "",
			label: "student id",
		},
		{
			name: "password",
			type: "password",
			group: "input",
			validated: false,
			value: "",
			label: "password",
		},
	],
};

export function LoginForm(model: FormModel) {
	return (
		<form class="flex flex-col" hx-post="/forms/login" hx-swap="outerHTML">
			{model.fields.map(FormInput)}
			<div class="h-2" />
			<input
				type="submit"
				value="submit"
				class="bg-amber-500 text-white font-bold text-lg rounded-md py-4 uppercase cursor-pointer"
			/>
		</form>
	);
}

function FormInput(field: FormField) {
	if (!field.validated || field.validation.level === "valid") {
		return (
			<>
				<label htmlFor={field.name} class="font-semibold text-lg capitalize">
					{field.label}
				</label>
				<div class="h-2" />
				<input
					name={field.name}
					type={field.type}
					value={field.value}
					class={
						"bg-gray-100 border-2 border-gray-300 rounded-md h-14 p-4 focus:outline-none font-bold text-gray-600"
					}
				/>
				<div class="h-4" />
			</>
		);
	}

	return (
		<>
			<label htmlFor={field.name} class="font-semibold text-lg capitalize">
				{field.label}
			</label>
			<div class="h-2" />
			<ul>
				{field.validation.messages.map((message) => (
					<li
						key={message} /*probably the worst thing to use as a key*/
						class="text-red-400 text-sm font-semibold first-letter:text-gray-700"
					>
						{message}
					</li>
				))}
			</ul>
			<input
				name={field.name}
				type={field.type}
				value={field.value}
				class={
					"bg-red-100 border-2 border-red-300 rounded-md h-14 p-4 focus:outline-none font-bold text-red-600"
				}
			/>
		</>
	);
}
