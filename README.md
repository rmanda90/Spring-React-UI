# Spring-React-UI
Project is to Learn Full Stack (Spring Boot, React, ELK, Rabit MQ &amp; mysql)

### Project Stack
#### Spring Boot
1. <a href="https://spring.io/guides/gs/reactive-rest-service/">REST services</a>
2. <a href="https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/">spring-cloud-openfeign</a>
3. <a href="https://docs.spring.io/spring-cloud-config/docs/current/reference/html/">Spring Cloud Config</a>
4. <a href="https://spring.io/projects/spring-data-jpa/">Spring Data JPA</a>
5. <a href="https://spring.io/guides/gs/messaging-rabbitmq/">Messaging with RabbitMQ</a>
6. <a href="https://spring.io/projects/spring-data-elasticsearch">Spring Data Elasticsearch</a>
7. <a href="https://www.baeldung.com/mockito-series">Mockito Junit</a>

#### React-UI
1. <a href="https://react-bootstrap.github.io/getting-started/introduction/">React Bootstrap</a>
2. <a href="https://react-redux.js.org/introduction/getting-started">React Redux</a>
3. <a href="https://www.geeksforgeeks.org/how-to-fetch-data-from-an-api-in-reactjs/">Fetch API</a>

### Exapmple project considered
Example considered to build an application for a college with below use cases

1. Many departments which can offer any number of courses. -> <b> OneToMany </b>
2. Many instructors can work in a department and an instructor can work only in one department. For each department there is a Head. -> <b> ManyToOne </b>
3. An instructor can be head of only one department. <b> OneToOne </b>
4. Each instructor can take any number of courses, but course can be taken by only one instructor. <b> ManyToOne </b>
5. A student can enrol for any number of courses and each course can have any number of students. <b> ManyToMany </b>

![img_1.png](/ERD-College.png)

### This Spring-React-UI is communicating with other microservices programs used are these:

1. Project: <a href="https://github.com/rmanda90/rest-app-client">rest-app-client - Eureka Client</a> on port 8080
    - This is a spring boot and react combine project that is running on port 8080 and exposed as eureka client and connecting using with feign client.
    - The purpose of communicating with other microservice is to separate all db related calls in other application.
    - Run this application it will automatically register in eureka server.
    - to use this app Open with any ide and use Maven, use the command − mvn clean install 
    - then run the project and hit http://localhost:8080 it will open the application with react UI and load the data from other microservice.

2. Project: <a href="https://github.com/rmanda90/discovery-server">discovery-server - Eureka Server</a> on Port: 8761
3. React is enabled with redux store feature.
### Yet to implement.
1. Rabit MQ will be used for all delete operations just push the message with id what need to be deleted, it will communicate with rabit microservice.
2. Send Important notifications to student and Instructors using Scheduler & Rabit MQ.
3. The data what ever we see in frontend should be load from Kibana this is other service. 
