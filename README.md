# Orbify - technical assessment

### Assumptions
1. In order to fulfill the task, I've used my favourite React + TypeScript setup. 
2. State management. Instead of using component's local state or one of the state managers, I've implemented
React-Hook-Form, where management of the fields is out of the box. In this way I was able to capture all fields, 
and depends on fields state, handle the map and form behaviour.
3. For Axios HTTP Request (POST only in this case), I've built a little bit of abstraction, where entire request handling is under the hood.
4. Validation and fields error handling is handled by Yup, that provides defined schema used by React-Hook-Form at the end
5. Mocking of back-end response is handled by MSW (Mock Service Worker), where depends on the coordinates validation, 
success or error message will be displayed.
6. For proper [repository](https://github.com/bigeyedes/orbify) managing and building, 
simple CI pipeline was configured
7. To keep the project in good shape, and make it scalable, the [bulletproof-react](https://github.com/alan2207/bulletproof-react) file structure was implemented
8. Ladle is used here to build, render and mock UI.

# How to use Wizard?
Just fill the form fields, choose one of the files (AOI.txt or AOI_not_valid.txt) to test form behaviour.

# Run project locally:
1. npm i - to install dependencies
2. npm run ladle - to run mock environment using Ladle

## Tech used:
1. React
2. TypeScript
3. Axios
4. Ladle (UI mock)
5. Tanstack-query (API calls)
6. React-Hook-Form (form hanling)
7. yup (form validation)
8. eslint / prettier (code quality)
9. Vite (run engine)
10. Jest (testing)
11. MSW (Mocking adapter) 

## CI
1. Github Actions

## File structure:
1. Bulletproof-react
