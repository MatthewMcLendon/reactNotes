# React Planner

This project was built to begin learning react. It has full CRUD for simple notes and calendar events.

## Install

#### Setup

Clone this repo to your desktop and run `npm install` to install all the dependencies. Also make sure you have [Json-server](https://www.npmjs.com/package/json-server#database) installed.

To run the app, first navigate to the api directory and start Json-server using the command below.

```
json-server --watch database.json -p 8088
```

Then start the app by navigating to the root directory and using the command `npm start`.

### Usage

You can either create a user or use the default admin/password login. Once logged in you will see navigation for notes and calendar.

## Built with

- [react-calendar](https://www.npmjs.com/package/react-calendar) - Interactive date picking
- [Json-server](https://www.npmjs.com/package/json-server#database) - REST API for prototyping
- [React](https://react.dev) - Library for web and native user interfaces
