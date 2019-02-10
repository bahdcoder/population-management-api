# Population Management API

### How to run project
This project is built on the adonis framework. To make development faster, install the adonis cli using the command `npm install -g @adonisjs/cli`

 - Clone repository
 - Install npm dependencies
 - Create a file `.env` at project root, and use `.env.example` as a sample to setup your environment variables. For database, setup mysql or sqlite3. your choice.
 - Be sure to generate application key using `adonis key:generate`
 - Run migrations using command `adonis migration:run`
 - Run seeders using command `adonis seed`
 - Run application using `adonis serve --dev`
 - Run application tests using `adonis test`
 - To get a list of users with authentication tokens for them, make api request to `https://localhost:3333/`


#### API DOCUMENTATION / Available endpoints

 - `POST /locations`: This endpoint is used to add new location data. 
    - Required attributes: 
       - `name` must be unique
       - `male_count` must be an integer
       - `female_count` must be an integer

    - Optional attributes
       - `location_id` must be a valid id of an existing location. use this to create nested locations.

 - `GET /locations`: This endpoint is used to get all locations and their data.
 - `PUT/PATCH /locations/:id`: This endpoint is used to update any attributes of the location. All attributes except `id` and `location_id` can be updated.
 - `DELETE /locations/:id`: This endpoint is used to delete a location.

 For more details on all endpoints, please refer to the tests.
