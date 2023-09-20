<script>
	import coke from '$lib/images/coke.jpg';
	import chrome from '$lib/images/chrome.jpg';
	import badminton2 from '$lib/images/badminton2.jpg';
	import badminton3 from '$lib/images/badminton3.jpg';
</script>

<div class="bg-[url($lib/images/badminton.jpg)] min-h-screen h-20 bg-center bg-cover">
	<div class="p-48 max-w-4xl">
		<h1 class="text-primary text-6xl font-medium text-black">Active Youth Badminton</h1>
		<div class="">
			<p class="text-secondary text-2xl py-12 text-black">Empowering the youth through things</p>
			<a
				class="btn normal-case bg-[#9a9a9a]/30 rounded-full border-0 text-[#1e3755] hover:bg-[#4d6376]"
				href="./programs">Check out our Programs</a
			>
		</div>
	</div>
</div>
<div>
	<div class="flex justify-center p-24">
		<div class="flex flex-col text-center">
			<h1 class="text-4xl font-medium">About Us</h1>
			<p class="py-12 max-w-4xl">
				We are amazing smart and cool people. Our mission is spreading smartness by teaching
				badminton and doing good things for people are sport
			</p>
			<div class="columns-2 max-w-4xl">
				<img class="flex-col" src={coke} alt="coke" />
				<img class="flex-col" src={chrome} alt="chrome" />
			</div>
		</div>
	</div>
</div>
<div>
	<div class="bg-secondary p-24 flex justify-center items-center">
		<div class="flex columns-2 gap-20 max-w-6xl">
			<div class=" flex flex-col text-center">
				<h1 class="text-4xl font-medium text-[#1e5A85]">Events</h1>
				<img class="p-4" src={badminton2} alt="badminton2" />
				<p class="pb-4">
					Yay we host events to support the community, we raise money or something.
				</p>
				<a href="./events" class="btn p-4 w-48 flex self-center">See More</a>
			</div>
			<div class="flex flex-col text-center">
				<h1 class="text-4xl font-medium text-[#1e5A85]">Programs</h1>
				<img class="p-4" src={badminton3} alt="badminton3" />
				<p class="pb-4">
					Yay we teach every week with dedicated teachers and whatever and help young people in the
					community.
				</p>
				<a href="./programs" class="flex btn p-4 w-48 self-center">See More</a>
			</div>
		</div>
	</div>
</div>
<div>
	<div class="bg-something p-24 flex justify-center items-center text-center">
		<div class="">
			<h1 class="text-4xl items-center">Contact Us</h1>
			<div class="flex pt-2">
				<p class="items-center">Email us at&nbsp;</p>
				<span class="text-white underline">activeyouthyyc@gmail.com</span>
			</div>
		</div>
	</div>
</div>
