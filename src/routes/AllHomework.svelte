<script>
  import Assignment from "../components/Assignment.svelte";
  import { homework } from "../stores";

  let name;
  let className;
  let day;
</script>

<div class="w-screen h-screen bg-gray-500 flex flex-col">
  <span class="text-2xl text-center">Homework</span>
  <div class="border-2 border-black rounded-lg inline-flex">
    <input
      type="text"
      class="rounded-lg w-1/4 m-2 border-black border-2"
      placeholder="Name"
      bind:value={name}
    />

    <input
      type="text"
      class="rounded-lg w-1/4 m-2 border-black border-2"
      placeholder="Class"
      bind:value={className}
    />

    <select class="rounded-lg w-1/4 m-2 border-black border-2" bind:value={day}>
      <option value="0">Sunday</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Friday</option>
      <option value="6">Saturday</option>
    </select>

    <button
      class="rounded-lg border-black border-2 p-2 w-1/4 m-2"
      on:click={() => {
        $homework = [
          ...$homework,
          {
            name,
            class: className,
            day,
          },
        ];
        name = "";
        className = "";
        day = "";
      }}>Add Assignment</button
    >
  </div>
  <div
    class="flex flex-col justify overflow-y-auto border-4 border-black rounded-lg m-4"
  >
    {#each $homework as hw, i}
      <Assignment {i} name={hw.name} className={hw.class} day={hw.day} />
    {/each}
  </div>

  <button
    class="rounded-lg border-black border-2 p-2 shadow-xl hover:shadow-none m-4 bg-slate-600"
  >
    <a href="/" class="w-full inline-block">Return Home</a>
  </button>
</div>
