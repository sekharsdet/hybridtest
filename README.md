# hybridtest

## Prerequisites

- NodeJS >=14


## Install

* Clone the repo
* cd project folder

```sh
npm install
```

## Open Cypress Test Runner

```sh
npx cypress open
```

## Run Cypress Tests in Headless Mode

```sh
cypress run --headless -b chrome

cypress run --headless -b firefox
```
## Run Cypress Tests on default browser with report genaration 

```sh
npm run cypress
```

Reports will be presented in \mochawesome-report\mochawesome.html (open with any browser)

## Tests
Tests are located at cypress\e2e\advertisements

### Technologies used:

- NodeJS
- Cypress
- mochawesome report
