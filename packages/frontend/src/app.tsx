import * as React from 'react';
import { lookupStuff } from '@base/shared/src/lookup-stuff';
import './index.css';
import { Dropdown } from '@base/frontend/src/components/dropdown';

export function App(): React.ReactElement {
  const [count, setCount] = React.useState(0);

  const thing = lookupStuff('testing');

  return (
    <div className="flex focus:ring-2 focus:bg-blue-700 m-0 pt-8 pb-4 border-b border-gray-900 p-8">
      <div className="flex-1 border border-gray-600 p-2 bg-red-500 mr-2">
        <button onClick={() => setCount(count + 1)}>Click Me !!!</button>
      </div>
      <div className="flex-1 border border-gray-600 hover:bg-blue-700">
        {count} {thing}
      </div>
      <div className="flex-1 border border-amber-800">
        <Dropdown />
      </div>
    </div>
  );
}
