Description: This app can be used to keep track of all of the restaurants you and your friends have been to around the world, as well as for keeping track of how each of you felt about that restaurant!  You can create your own password protected account, add cities/restaurants/reviews, and keep track of how other people felt about different places.

Installation: You will need NPM, ActiveRecord, and Ruby installed in order to utilize this program.  Rails (6.1.3.2) is added as a Gem in the Gemfile.  

The schema for the databases can be found in the cdb/migrate/schema.rb file.  To run the migration files and set up the database, run rails db:migrate in the program directory.  There is no seed data, as we want all reviews to be authentic and by real users.

Usage: The front and back end of this program are under the phase-4-project-real repo. Fork and clone that repo, and use npm start --prefix client to start up the React front end, and rails s to start the Ruby on Rails server on the back end.

Requirements:

- Rails 6.1.3.2
- React 18.2.0
- Ruby 2.7.4
- Node 16.14.2
- npm 8.12.2
- Postgresql

