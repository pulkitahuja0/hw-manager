<script>
  import { link } from "svelte-spa-router";

  import { homework } from "../stores";
  import { dayToString } from "../helpers/dayHelpers";

  const push = (i) => {
    const pushValue = document.getElementById(`input-${i}`).value;
    $homework[i].day += pushValue;
  };

  const limitInput = (i) => {
    const curr = document.getElementById(`input-${i}`).value;
    if (curr <= 0 || curr >= 7) {
      document.getElementById(`input-${i}`).value = 1;
    }
  };

  export let name;
  export let className;
  export let i;
  export let day = -1;
</script>

<div
  class="inline-flex p-3 rounded-lg border-black border-2 m-3 shadow-xl hover:shadow-none"
>
  <div class="w-1/6 truncate">
    <a href="/" use:link={`/hw/${i}`} class="w-full inline-block">{name}</a>
  </div>
  <div class="w-1/6">
    {className}
  </div>
  <div class="w-1/6">
    <button
      class="rounded-lg border-black border-2 p-2 mr-40"
      on:click={() => {
        $homework = $homework.filter((_, f) => f != i);
      }}>Complete</button
    >
  </div>
  <div class="">
    <input
      class="rounded-lg border-black border-2 w-1/6 ml-40 p-2"
      type="number"
      id={`input-${i}`}
      on:change={() => limitInput(i)}
    />
    <button
      class="rounded-lg border-black border-2 p-2 w-1/5"
      on:click={() => push(i)}>Push</button
    >
  </div>

  {#if day >= 0}
    <div class="w-1/6">{dayToString(day)}</div>
  {/if}
</div>
