import { APP_TITLE } from 'shared';
import { lookupStuff } from 'shared/src/lookup-stuff';

export function testing() {
  console.log('story');
  console.log(APP_TITLE);
  lookupStuff('sdfd')
}

