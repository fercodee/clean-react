# React, TDD and Typescript

# Clean Architecture 

- Sobrecarga no componente
- Domain: is business rule layer
    Ex: Authentication, but the idea is that it is just an interface and not a class
obs: Domain not depend anybody!
- Data: is layer where stay yours implementations of use cases
- Data layer depend of Domain!
- Infra: layer of implementations with external frameworks, ex: AxiosHttpClient
- Presentation: get data of api and convert for format that your UI need
- Main: depend of all, the main layer have factories that build all class (instance) of project (Composition Root). Ex: LoginFactory, Index and etc...
- The objective of React is render your view and control state

- IMPORTANT: Dependency inversion principle. Ex: Login depende he (wrong way), create interface and invert dependency
Example detail: You have login component and need validation, you not can pass the validation instance directly for component. You should create one interface with rules that you need. Now your component dont depend of validation instance, your component will works without coupling. 
Dont import how validation is implemented, but if it fulfills (atende, cumpri) what the interface requests 

- The Interface is a bridge!
- Interface Segregation Principle

# General
- sut: System Under Test, this is the object is testing
- Spy: is stunt double of test
- data/test -> where stay your mock implementations
- Factory is very important!

# Jest
- findRelatedTests: just run tests of files that they were edit
- toEqual compare objects, toBe compare the pointer of object
- when go test excession with jest, no use "await"
Ex: 
const promise = sut.auth(mockAuthentication())
await expect(promise).rejects.toThrow(new InvalidCredentialsError())
obs: see promise variable

# Packages
- https://www.npmjs.com/package/@faker-js/faker
Obs: faker provides its own type definitions, so you don't need @types/faker installed!
Faker generate random values!

# Where did i stop?
-> Login - Domain e Data Layer :: 04 (13:10)