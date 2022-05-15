
type PracticeProps = {
  name?: string,
  age: number,
  male: boolean,
  arrayOfObjects: {
    firstName: string,
    lastName: string
  }[]
}

const Practice = (props: PracticeProps) => {
  const {name, age, male, arrayOfObjects} = props
    return (
      <div className="App">
       <div>{name}</div>
       <div>{age}</div>
       <div>{male? 'Male' : "female"}</div>
       {arrayOfObjects.map((name, i) => {
         return <div key={i}>{`person ${i + 1} is ${name.firstName} ${name.lastName}`}</div>
       })}
      </div>
    );
  }

  export default Practice
 