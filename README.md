# Shopify-demo

Proyecto desarrollado por roimar rafael urbano Urbanoprogramador@gmail.com

## Available Scripts

ve al directorio del proyecto y corre

### `npm install `

### `npm run start`



### Ejecutar pruebas 

#### `npm run stest `


<h1 style="color:red">En caso de que no funcione siga los sigientes pasos para instalar un entorno de prueba en typscript</h1>


# Configurar pruebas en react typescript

paso uno


### npm install @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest

### npm i -D --exact jest-watch-typeahead@0.6.5

### npm install @reduxjs/toolkit

paso 2 crear el archivo jest.config.js con el siguiente contenido

``` JavaScript
module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
```

paso 3 crear el archivo tsconfig.json con el siguiente contenido


```JavaScript

{
    "compilerOptions": {
      "esModuleInterop": true,
      "noImplicitAny": false /* Raise error on expressions and declarations with an implied 'any' type. */,
      "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
      "sourceMap": true /* Generates corresponding '.map' file. */,
      "target": "es2015" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
      "jsx": "react" /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */,
      "types": [
        "react","jest"
      ] /* Type declaration files to be included in compilation. */,
      "module": "esNext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
      "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
      "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
      "declaration": false /* Generates corresponding '.d.ts' file. */,
      "removeComments": true /* Do not emit comments to output. */,
      "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
      "noUnusedLocals": false /* Report errors on unused locals. */,
      "strict": true /* Enable all strict type-checking options. */,
      "outDir": "dist" /* Redirect output structure to the directory. */,
      "baseUrl": "src" /* Base directory to resolve non-absolute module names. */,
      "typeRoots": [
        "./types",
        "node_modules/@types"
      ] /* List of folders to include type definitions from. */,
      "strictNullChecks": true /* Enable strict null checks. */,
      "allowJs": true, /* Allow javascript files to be compiled. */
      "lib": ["dom", "es2015", "es2018.promise"]
      
    },
    "exclude": ["dist", "node_modules"]
  }
  ```

  paso crear el archivo  src/globals.d.ts con el contenido 

  ```Ts
  import "@testing-library/jest-dom/extend-expect";

  ```

## luego de esto intente otra vez correr `npm run stest `
