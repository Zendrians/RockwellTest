# Rockwell interview test

Web app that schedules web scraping tasks based on a cron expression schedule.

## Project setup

The app consists on a Angular `Fontend` and a Node.js `Backend`, to run both execute the following commands on the root folder:

### Fontend

- `cd Frontend`
- `ng serve`

This should run the angular frontend on localhost.

### Backend

- `cd Backend`
- `node app.js` or `nodemon app.js` if nodemon is globally available.

With this an instance of node should be up and running in your local machine.

## Notes

- The ping functionality relies on the underlying platform (os), its only been tested in Windows so far. It's possible to simply disable it by removing the `isAlivePing` on the `scraperController` in case there's a platform issue.
