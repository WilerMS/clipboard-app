# Clipboard App

![image](https://user-images.githubusercontent.com/70902862/206320299-b6c078cb-5cac-45fd-bbba-a515492c8041.png)

## Table of contents:
---

- [Description](#description)
- [Installation guide](#installation-guide)
  - [Initialize server](#initialize-server)
  - [Initialize client](#initialize-client)


## Description
This is an app to have different text saved. You'll be able to enter and copy those text you usually use during your shift. This repository has a graphical user interface and an API REST that serve those information you saved in it.

You can see a demo here: [clipborad by Wiler Mariñez](https://www.youtube.com/watch?v=KmyHG7ZwuOI)

## Installation guide

In this repository we have two javascript projects, one for the web client and another one to deploy an express server which serves an API RESP.

### Initialize server
1. Execute the following commands in the root directory to install all dependencies.
```bash
cd server
npm install
```
2. Set these environment variables:
```
DB_USER=<database_user_here>
DB_PASSWORD=<database_password_here>
DB_HOST=<database_host_here>
DB_PORT=<database_port_here>
DB_NAME=<database_name_here>
PORT=<application_port_here>
JWT_SECRET=<secret_code_for_jwt_here>
```
3. Execute the following command to run the server in development mode the app.
```bash 
npm run dev
```

### Initialize client
1. Execute the following commands in the root directory to install all dependencies.
```bash
cd client
npm install
```
2. Set these environment variables:
```
API_HOST=<server_url_here>
```
3. Execute the following command to run the client in development mode the app.
```bash 
npm run dev
```
> It will run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

