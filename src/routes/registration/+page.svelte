<script>
	import { enhance } from '$app/forms';
</script>

<h1>register</h1>

<form class="p-24" method="POST" use:enhance>
	<!--Registration form here-->
	<label for="title">name</label>
	<input type="text" name="title" />

	<label for="title">email</label>
	<input type="text" name="email" />

	<label for="title">skill</label>
	<input type="text" name="skill" />

	<label for="title">program</label>
	<input type="text" name="program" />

	<button type="submit">Submit</button>
</form>
