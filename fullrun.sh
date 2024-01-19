#!/bin/bash

MAIN_DIR=$(pwd)

(cd frontend && npm install && npm run serve &)
(cd backend/Users && npm install && node server.js &)
(cd backend/CustomerService && npm install && node server.js &)
