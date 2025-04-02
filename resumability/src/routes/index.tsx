import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Counter from "~/components/Counter";

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <div>
        <Counter />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik demonstration page",
  meta: [
    {
      name: "description",
      content: "Qwik testing site",
    },
  ],
};
