# Project Structure 
```
src
│
├── assets
│   ├── images
│   ├── styles
│   ├── svgs
│   └── ...
│
├── components
│   ├── form // use react hook form or formik to custom component forms
│   │   ├── formInput.tsx
│   │   ├── formCheckbox.tsx
│   │   └── ...other component forms
│   └── ui // common
│       ├── button.tsx
│       ├── checkbox.tsx
│       └── ...other ui
│
├── configs // use axios to handle http request and use interceptor handle request or response 
│   └── apiClient.ts
│
├── contexts
│   └── ThemeContext.tsx
│
├── features
│   └── projects
│       ├── components
│       │   ├── _tests_
│       │   ├── ProjectForm.tsx
│       │   ├── projectTable.tsx
│       │   └── ...other components
│       │
│       ├── hooks
│       │   ├── _tests_
│       │   ├── useProduct.ts
│       │   └── ...other hooks
│       │   
│       ├── ProjectContext.tsx
│       └── ProjectWrapper.tsx
│
├── tasks
│       ├──...
│
├── hooks
│   ├── _tests_
│   ├── useFetch.ts
│   ├── useLocalStorage.ts
│   ├── useDebounce.ts
│   └── ... other hooks
│
├── layouts
│   ├── _tests_
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Sidebar.tsx
│   ├── Navbar.tsx
│   ├── MainLayout.tsx
│   └── ...OtherLayout.tsx
│
├── pages
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Project.tsx
│
├── routes // use react router dom
│   └── routes.tsx
│ 
├── services
│   ├── index.ts
│   ├── api.ts
│   ├── auth.ts
│   └── projectServices.ts
│
├── utils
│   ├── _tests_
│   ├── constants.ts
│   ├── functions.ts
│   └── ... other
├── types
│   ├── baseTypes.ts
│   └── ... other
├── ...
```