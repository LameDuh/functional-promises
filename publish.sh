#!/bin/bash
set -e
# npm test
# npm run build
# npm run docs-build
npm publish
gsed -i 's/"functional-promises"/"functional-promise"/' ./package.json
npm publish
gsed -i 's/"functional-promise"/"functional-promises"/' ./package.json

