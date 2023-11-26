import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name="Spongebob" age="32" isStudent={true} />
      <Student name="patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student />
    </>
  );
}

export default App
