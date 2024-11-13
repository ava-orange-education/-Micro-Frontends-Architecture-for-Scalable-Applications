#!/bin/bash

cd search
npm install
cd ..

cd tasks
npm install
cd ..

cd shell
npm install
cd ..

npx concurrently "cd search && npm run dev" "cd tasks && npm run dev" "cd shell && npm run dev"