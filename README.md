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
    {/* Without title */}
    <Dump data={{ name: 'John Doe', age: 30 }} />

    {/* With title */}
    <Dump title="PersonRecord" data={{ name: 'John Doe', age: 30 }} />
  </>
)
```
