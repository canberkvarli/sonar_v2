#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install && npm run build

bundle install
bundle exec rake db:migrate
bundle exec rails db:seed