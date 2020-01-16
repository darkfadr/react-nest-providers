# react-nest-components

## Installation
```bash
$ yarn add react-nest-components
```
or 
```bash
$ npm install --save react-nest-components
```

## Usage
```js
import React, { createElement } from 'react'
import nest, { render } from 'react-nest-components';
import i18n from './i18n';


const AppProviders = nest(
  AnalyticsProvider,
  () => render(LanguageProvider, { i18n }),
  ThemeProvider,
  CustomProvider
);

// Note: the above will create the following
// const AppProviders = ({children}) => (
//   <AnalyticsProvider>
//     <LanguageProvider i18n={i18n}>
//       <ThemeProvider>
//         <CustomProvider>
//           {children}
//         </CustomProvider>
//       </ThemeProvider>
//     </LanguageProvider>
//   </AnalyticsProvider>
// );

ReactDOM.render(
  <AppProvider>
    <App/>
  </AppProvider>, 
  document.getElementById('root)
);


```

## Why do this? Why so extra?

## TODO
- [ ] Add documentation
- [ ] Implement tests