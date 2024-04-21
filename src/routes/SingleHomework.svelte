<script>
  import { homework } from "../stores";

  const limitInput = () => {
    const curr = document.getElementById(`input`).value;
    if (curr <= 0 || curr >= 7) {
      document.getElementById(`input`).value = 1;
    }
  };

  export let params;
</script>

<div class="w-screen h-screen bg-gray-500 flex flex-col">
  <span class="text-2xl text-center">Homework</span>
  <input
    class="rounded-lg border-black border-2 p-2 w-1/4 m-2"
    bind:value={$homework[params.id].name}
  />
  <input
    class="rounded-lg border-black border-2 p-2 w-1/4 m-2"
    bind:value={$homework[params.id].class}
  />

  <select
    class="rounded-lg w-1/4 m-2 border-black border-2"
    bind:value={$homework[params.id].day}
  >
    <option value="0">Sunday</option>
    <option value="1">Monday</option>
    <option value="2">Tuesday</option>
    <option value="3">Wednesday</option>
    <option value="4">Thursday</option>
    <option value="5">Friday</option>
    <option value="6">Saturday</option>
  </select>

  <div>
    <button
      class="rounded-lg border-black border-2 p-2 shadow-xl hover:shadow-none m-4"
      on:click={() => {
        $homework = $homework.filter((_, f) => f != params.id);
      }}
    >
      <a href="/">Delete</a>
    </button>
    <button
      class="rounded-lg border-black border-2 p-2 shadow-xl hover:shadow-none m-4"
    >
      <a href="/" class="w-full inline-block">Return Home</a>
    </button>
  </div>
</div>
