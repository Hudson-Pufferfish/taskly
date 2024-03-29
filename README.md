# Taskly

## Overview

[Taskly](https://taskly.onrender.com/) is a [Trello](https://trello.com/) clone, which allows users to create project boards to manage their progress and organize tasks.

## Technologies used

**Frontend**

- React
- Redux
- JavaScript
- HTML
- CSS
- TailwindCSS
- Styled-components

**Backend**

- Flask
- Python
- PostgreSQL
- SQLAlchemy

## Taskly setup

1. Clone this repository (https://github.com/Hudson-Pufferfish/taskly.git)
2. Install dependencies - `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
3. Create a `.env` file based on the **.env.example** with proper settings required for the development environment
4. Setup PostgreSQL user, password and database and to make sure it matches the **.env** file
5. Get into pipenv, migrate the database, seed the database, and run the flask app using the following commands:
   - `pipenv shell`
   - `flask db upgrade`
   - `flask seed all`
   - `flask run`
6. To run the React App in development, checkout the [README](./client/README.md) inside the `client` directory.

## Features

Logged in users can perform the following action:

- View/Create/Update/Delete Boards
- View/Create/Update/Delete Lists
- View/Create/Update/Delete Cards

## Database Schema

![Database Schema](https://user-images.githubusercontent.com/96578906/206539385-11a8c243-83a9-4d0c-93cb-e510d8393f61.png)

## Demo
<br>
<img src="https://user-images.githubusercontent.com/96578906/229305612-ada23fcd-e336-4c57-a5cd-b2b5dfc36108.png" width="90%">
<img src="https://user-images.githubusercontent.com/96578906/229305781-e9dfe955-9089-4c9d-9a8c-ece3b945dde7.png" width="90%">
<img src="https://user-images.githubusercontent.com/96578906/229305861-e7defa1e-d3e5-4c36-a453-56de3ce81b67.png" width="90%">