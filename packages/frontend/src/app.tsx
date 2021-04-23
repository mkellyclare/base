import * as React from 'react';
import { lookupStuff } from 'packages/shared/src/lookup-stuff';

export function App(): React.ReactElement {
  const [count, setCount] = React.useState(0);

  const thing = lookupStuff('testing')

  return (
    <div>
      <h1>Welcome on {thing}!</h1>
      <p>
        This is the main page of our application where you can confirm that it
        is dynamic by clicking the button below.
      </p>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
}