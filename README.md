
# API Project: URL Shortener Microservice

## Table of contents
* [Status](#status)
* [User stories](#user-stories)
* [Example usage](#example-usage)
* [Example output](#example-output)
* [Technologies](#technologies)
* [Screenshots](#screenshots)
* [Contact](#contact)


## Status
Project is in progress.

## User stories:

1. I can POST a URL to `[project_url]/api/shorturl/new` and I will receive a shortened URL in the JSON response. Example : `{"original_url":"www.google.com","short_url":1}`
2. If I pass an invalid URL that doesn't follow the `http(s)://www.example.com(/more/routes)` format, the JSON response will contain an error like `{"error":"invalid URL"}`
HINT: to be sure that the submitted url points to a valid site you can use the function `dns.lookup(host, cb)` from the dns core module.
3. When I visit the shortened URL, it will redirect me to my original link.

## Example usage:
to follow

## Example output:
to follow

## Technologies
* express.js, node.js, mongodb, mongoose, html, css

## Screenshots
to follow

## Contact
Created by [Kay Pea](https://imkp.co.uk) - feel free to contact me!