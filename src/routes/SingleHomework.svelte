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

  <input
    class="rounded-lg border-black border-2 p-2 w-1/4 m-2"
    type="number"
    id="input"
    bind:value={$homework[params.id].day}
    on:change={() => limitInput()}
  />

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
