<script>
  import { link } from "svelte-spa-router";
  import { homework } from "../stores";
</script>

<div
  class="w-4/12 rounded-lg bg-gray-300 h-screen flex flex-col mx-2 overflow-y-auto"
>
  <span class="w-full text-center h-min my-6 text-2xl">Look at the Week</span>
  <div class="grid grid-cols-7">
    {#each { length: 7 } as _, day}
      <div class="">
        {#each $homework as hw, j}
          {#if hw.day == day}
            <div
              class="m-2 p-2 rounded-lg bg-gray-500 border-black border-2 shadow-xl hover:shadow-none truncate"
            >
              <a href="/" use:link={`/hw/${j}`} class="w-full inline-block"
                >{hw.name}</a
              >
            </div>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
