<script lang="ts">

  export let label: string = 'Click me';

  export let variant: 'primary' | 'secondary' = 'primary'; // new prop
</script>

<button
  class="btn"
  data-variant={variant}
  on:click={() => console.log('clicked')}
>

  {label}
</button>

<style>
  .btn {
    padding: 0.5rem 1rem;

    background: #eeeeee;
    color: #222222;
    border-radius: 0.375rem;
  }
</style>
    color: white;
    border-radius: 0.375rem;
  
  .btn[data-variant="primary"] { background: #2563eb; }  /* blue-600 */
  .btn[data-variant="secondary"] { background: #6b7280; } /* gray-500 */
</style>

