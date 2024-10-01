export function Counter() {
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
