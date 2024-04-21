<script>
  import { link } from "svelte-spa-router";

  import { homework } from "../stores";
</script>

<div class="w-4/12 rounded-lg bg-gray-200 h-screen flex flex-col">
  <span class="w-full text-center h-min my-6 text-2xl">Manage Homework</span>
  <button
    class="rounded-lg border-black border-2 p-2 m-4 bg-red-500"
    on:click={() => {
      $homework = [];
    }}>Clear</button
  >
  <button class="rounded-lg border-black border-2 p-2 m-4"
    ><a href="/" use:link={"/hw"} class="w-full inline-block">Manage</a></button
  >
</div>
