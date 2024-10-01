export function Login() {
	return (
		<>
			<div class="w-screen h-screen flex">
				<div class="basis-1/2 bg-blue-600" />
				<div class="basis-1/2 flex items-center justify-center p-16">
					<div class="basis-3/4 flex min-h-full flex-col justify-center">
						<h1 class="text-center font-bold capitalize text-2xl">
							welcome back
						</h1>

						<div class="h-4" />

						<form class="flex flex-col">
							<InputID />
							<div class="h-4" />
							<InputPassword />
							<div class="h-8" />
							<InputSubmit />
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

function InputID() {
	return (
		<>
			<label htmlFor="student-id" class="font-semibold text-lg">
				ID Number
			</label>
			<div class="h-2" />
			<input
				type="text"
				class="bg-gray-100 border-2 border-gray-300 rounded-md h-14 p-4 focus:outline-none font-bold text-gray-600"
			/>
		</>
	);
}

function InputPassword() {
	return (
		<>
			<label htmlFor="student-id" class="font-semibold text-lg">
				Password
			</label>
			<div class="h-2" />
			<input
				type="password"
				class="bg-gray-100 border-2 border-gray-300 rounded-md h-14 p-4 focus:outline-none"
			/>
		</>
	);
}

function InputSubmit() {
	return (
		<>
			<input
				type="submit"
				value="login"
				id="login"
				class="bg-amber-500 text-white font-bold text-lg rounded-md py-4 uppercase cursor-pointer"
			/>
		</>
	);
}
