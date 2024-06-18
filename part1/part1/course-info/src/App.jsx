const App = () => {
  const Header = ({ course }) => {
    return <h1>{course}</h1>
  }
  const Content = ({ parts }) => {
      return ( 
        <div>
      <p>Part: {parts[0].name} {parts[0].exercises}</p>
      <p>Part: {parts[1].name} {parts[1].exercises}</p>
      <p>Part: {parts[2].name} {parts[2].exercises}</p>
      </div>
    )
  }
  const course = 'Half Stack application development'
  const parts = [

  {name: 'Fundamentals of React', exercises1:10 },
  {name: 'Using props to pass data', exercises2: 7},
  {name: 'State of a component', exercises3: 14}
]
const Total = ({ parts }) => {
  const total = parts[0].exercises1 + parts[1].exercises2 + parts[2].exercises3
    return <p>Total number of exercises {total}</p>
}
  
  return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    )
  }

export default App