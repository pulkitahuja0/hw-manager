<script>
  import { homework } from "../stores";
  import Assignment from "./Assignment.svelte";
</script>

<div class="w-4/12 rounded-lg bg-gray-200 h-screen flex flex-col">
  <span class="w-full text-center h-min my-6 text-2xl">Today's Homework</span>
  <div class="flex flex-col justify overflow-y-auto">
    {#each $homework as hw, i}
      {#if hw.day == new Date().getDay()}
        <Assignment {i} name={hw.name} className={hw.class} />
      {/if}
    {/each}
  </div>
</div>
