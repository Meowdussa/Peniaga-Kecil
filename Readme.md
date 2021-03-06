# Peniaga Kecil

#### Overview

Due to Covid-19 a lot of street food vendors are out of business, having been forced to stay at home and unable to promote their business locally because of lack of resources.
80% of Malaysia’s street food vendor don’t have any savings.

## Project Description

A web application for small business owner to market their products

FOR:
Street Food Vendors to promote their business locally
WHO : Need to boost their business
THE PRODUCT: Is the website
THAT: Helps local population aware of their local street food vendors products
UNLIKE: relying on word of mouth/local knowledge

## MVP

### Current Feature
- JSON Web Token Authentication
- Geolocation with Leaflet
- Search bar for shops
- Image upload with Cloudinary

### Future Feature
- Payment gateway
- Dual language
- Get user location with Geolocation API

### Database Scheme

![dbschema](https://user-images.githubusercontent.com/86279819/136480966-56cb0c37-5a4a-4df4-8c29-f43c12eaec4f.png)


## Setup

### Dependencies

Run `npm install` in project directory. This will install server-related dependencies such as express.
`cd peniaga kecil` and `run npm install` and `yarn install`. This will install client dependencies (React).

### Database Prep

- Access the MySQL interface in your terminal by running mysql -u root -p
- Create a new database called peniaga: `create database peniaga`
- Add a .env file to the main folder of this repository containing the MySQL authentication information for MySQL user. For example:

```bash
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=peniaga
  DB_PASS=YOURPASSWORD
  ```

Run `npm run migrate` in the main folder of this repository, in a new terminal window. This will create three tables called 'header', 'item', and 'owner' in your peniaga database.

### OpenCage API
- For Leaflet tow work, first [sign up](https://opencagedata.com/users/sign_up) to get a free API key from OpenCage.
- Then create a .env file on the root folder of this project, with the following content:

``` bash
REACT_APP_OCD_API_KEY=[Your-api-key]
```
### Run Your Development Servers

- Run `npm start` in project directory to start the Express server on port 5000
- `cd peniaga kecil` and run `npm start` to start client server in development mode with hot reloading in port 3000.
- You can test your client app in `http://localhost:3000`
- You can test your API in `http://localhost:5000/`




_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Kuala Lumpur._
