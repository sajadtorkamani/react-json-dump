# react-json-dump

### Install

```shell
npm install react-json-dump
```

### Usage

[See demo](https://codesandbox.io/p/sandbox/github/sajadtorkamani/react-json-dump-demo/tree/main)

```typescript jsx
import { Dump } from 'react-json-dump'

const App = () => (
  <>
    <Dump value={{ name: 'John Doe', age: 30 }} />

    {/* With label */}
    <Dump label="PersonRecord" value={{ name: 'John Doe', age: 30 }} />
  </>
)
```
