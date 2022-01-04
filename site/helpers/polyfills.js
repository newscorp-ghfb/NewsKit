/* eslint-disable import/no-extraneous-dependencies, no-extend-native */

// core-js comes with Next.js. So, you can import it like below
import includes from 'core-js/library/fn/string/virtual/includes';
import repeat from 'core-js/library/fn/string/virtual/repeat';
import startsWith from 'core-js/library/fn/string/virtual/starts-with';
import assign from 'core-js/library/fn/object/assign';

String.prototype.includes = includes;
String.prototype.repeat = repeat;
String.prototype.startsWith = startsWith;
Object.assign = assign;
