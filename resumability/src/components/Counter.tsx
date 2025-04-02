import { component$ } from "@builder.io/qwik";
import { useSignal, type Signal } from "@builder.io/qwik";

interface CurrentValueProps {
  count: number;
}

const CurrentValue = component$<CurrentValueProps>(({ count }) => {
  console.log("Render: <CurrentValue/>");
  return <div>Current count: {count}</div>;
});

interface IncrementorProps {
  count: Signal<number>;
}

const Incrementor = component$<IncrementorProps>(({ count }) => {
  console.log("Render: <Incrementor/>");
  return (
    <button
      onClick$={() => {
        console.log("Interaction: +1");
        count.value++;
      }}
    >
      +1
    </button>
  );
});

export default component$(() => {
  console.log("Render: <Counter/>");
  const count = useSignal(0);

  return (
    <div>
      <CurrentValue count={count.value} />
      <Incrementor count={count} />
    </div>
  );
});
