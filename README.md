# react-json-dump

### Install

```shell
npm install react-json-dump
```

### Usage

```typescript jsx
import { Dump } from 'react-json-dump'

const App = () => (
  <>
    <Dump data={{ name: 'John Doe', age: 30 }} />

    {/* With label */}
    <Dump label="PersonRecord" data={{ name: 'John Doe', age: 30 }} />
  </>
)
```
