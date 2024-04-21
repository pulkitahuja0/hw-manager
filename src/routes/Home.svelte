<script>
  import Manager from "../components/Manager.svelte";
  import Schedule from "../components/Schedule.svelte";
  import Today from "../components/Today.svelte";
</script>

<div class="flex flex-row w-screen">
  <Today />
  <Schedule />
  <Manager />
</div>
