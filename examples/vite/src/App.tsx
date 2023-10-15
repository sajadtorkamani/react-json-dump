import { Dump } from '../../../src/Dump.tsx'

function App() {
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    occupation: 'software engineer',
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA',
      postalCode: '12345',
    },
    email: 'john.doe@example.com',
    phoneNumber: '(123) 456-7890',
    hobbies: ['reading', 'hiking', 'photography'],
  }

  return (
    <>
      <h1>Example: Vite</h1>
      <Dump value={person} />

      <Dump label="Person" value={person} />
    </>
  )
}

export default App
