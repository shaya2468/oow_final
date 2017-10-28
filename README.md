# In this document we will cover the following

* How to setup, configure and run the project on your local machine
* The implementation details




## Section 1: Running on your local machine

### Prerequisites
1. yarn is installed
2. eclipse with java installed
3. The project is downloaded: git clone https://github.com/shaya2468/oow_final

### Booting the server
1. In eclipse, 'import maven projects', pick the project in the <root folder>/'backend' folder
2. run the application by right clicking 'VanillaApplication'.

The server should now be up and running on local host, on port 8080

### Booting the client
1. Open a new terminal and cd into <root folder>/client/react
2. yarn -i 
3. yarn dev-server

Wait for the project to finish compiling and by the end the client should be up and running on local host, on port 8081.
When that happens, open your browser, localhost:8081

### Credentials for logging in
user name: woo-client

password: 123456


## Section 2: Implementation Details
There are 2 folders:

1. backend
2. client


### Client

The main page of the application is called 'WooPositionPage.js.
It contains the state of the web page. The rest of the classes in the 'components' folder are reusable react components.

The AppRouter.js configures the private and public routes.

The auth.js is for the api's


### Server
The server is implemented with spring, hibernate and Spring Security.

The api's are exposed using 'Spring Data Rest' in 'PlaySpringDataRepository'. They are protected in 'ResourceServerConfig'.

All the entities are defined in the entities folder.
In high level, the top entity is a 'position' which contains a 'company' etc etc..



