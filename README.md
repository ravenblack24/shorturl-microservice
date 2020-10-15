
# API Project: URL Shortener Microservice

## Table of contents
* [Status](#status)
* [User stories](#user-stories)
* [Example lookup](#example-usage)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [Contact](#contact)


## Status
An [interactive demo is available here](https://salty-harbor-79927.herokuapp.com/).

## User stories:

1. I can POST a URL to `[project_url]/api/shorturl/new` and I will receive a shortened URL in the JSON response. Example : `{"original_url":"https://www.google.com","short_url":1}`
2. If I pass an invalid URL that doesn't follow the `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`
HINT: to be sure that the submitted url points to a valid site you can use the function `dns.lookup(host, cb)` from the dns core module.
3. When I visit the shortened URL, it will redirect me to my original link.

## Example lookup:
[/api/shorturl/JeymQzbTU](https://salty-harbor-79927.herokuapp.com/api/shorturl/JeymQzbTU) should redirect to: [https://imkp.co.uk](https://imkp.co.uk)

## Technologies
* express.js, node.js, mongoose.js, mongodb, html, css

## Screenshots
to follow

## Contact
Created by [Kay Pea](https://imkp.co.uk) - feel free to contact me!