: '
The amount of files in our solution slows next.js development down, removing 
these icon map files appears to be a reasonable compromise for now.
'

echo 'Removing icon map files'

rm -f dist/esm/icons/filled/material/*.map
rm -f dist/esm/icons/outlined/material/*.map

rm -f dist/cjs/icons/filled/material/*.map
rm -f dist/cjs/icons/outlined/material/*.map

echo 'Removed icon maps files'