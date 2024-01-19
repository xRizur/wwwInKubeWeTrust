#!/bin/bash

MAIN_DIR=$(pwd)

(cd frontend && npm run serve &)
(cd backend/Users && node server.js &)
(cd backend/CustomerService && node server.js &)

wait

cd "$MAIN_DIR"
