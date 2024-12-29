#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate

# bundle install
# bundle exec rake assets:precompile
# bundle exec rake assets:clean
# bundle exec rake db:migrate
# bundle exec rake db:seed