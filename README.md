# Night Out

### Current interface:

<img width="188" alt="1" src="https://github.com/ohxrn/NightOutOpenSource/assets/79466519/372b85c3-24e3-4777-9845-e05da2c5ddbb">
<img width="188" alt="2" src="https://github.com/ohxrn/NightOutOpenSource/assets/79466519/29b1fd67-e605-41bc-9d89-169bf9710c16">
<img width="188" alt="3" src="https://github.com/ohxrn/NightOutOpenSource/assets/79466519/7cd49ecd-4d95-4079-8af0-2ee73924aad9">
<img width="188" alt="5" src="https://github.com/ohxrn/NightOutOpenSource/assets/79466519/de2f7f3d-5b77-425e-a9f5-d9ce8ff3fe16">
<img width="188" alt="4" src="https://github.com/ohxrn/NightOutOpenSource/assets/79466519/5cf9011e-7135-4ec5-b645-1c9b3a0921a3">

<i>This is the open source version of Night Out</i>

---

A MERN (MongoDB, Express, React, Node) stack development.

## Table of Contents

- [Requirements](https://github.com/jasonyaj/NightOutOpenSource#requirements)
- [How to Set Up and Run Night Out](https://github.com/jasonyaj/NightOutOpenSource#how-to-set-up-and-run-night-out)
  - [Client Side Dependency Install](https://github.com/jasonyaj/NightOutOpenSource#client-side-dependency-install)
  - [Server Side Dependency Install](https://github.com/jasonyaj/NightOutOpenSource#server-side-dependency-install)
  - [Running the Application](https://github.com/jasonyaj/NightOutOpenSource#running-the-application)

## Requirements

Install Node.

- To install Node, go to https://nodejs.org/en/ and download either the LTS version or the current version.

MongoDB Atlas account

- At this time a MongoDB Atlas account with the <i>night</i> database is provided. Connection will be made using mongoose on local port 8000.

## How to Set Up and Run Night Out

After cloning a copy to your PC follow these steps using a terminal.

### Client Side Dependency Install

In the <span style="color:orange">client</span> directory of this project, run in your terminal this command:

```
npm install
```

### Server Side Dependency Install

In the <span style="color:orange">server</span> directory of this project, run in your terminal this command:

```
npm install
```

### Running the Application

1. Navigate into the <span style="color:orange">server</span> directory of this terminal and run:

```
nodemon server.js
```

2. In a separate terminal, navigate into the <span style="color:orange">client</span> directory of this project and run:

```
npm start
```

If the browser doesn't automatically pop up with the Night Out app running then simply open the browser of your choice and type into the address bar this URL:

```
localhost:3000
```

or

```
http://127.0.0.1:3000/
```

[Return to Table of Contents](https://github.com/jasonyaj/NightOutOpenSource#table-of-contents)
