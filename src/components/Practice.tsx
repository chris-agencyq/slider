
export type PracticeProps = {
  name?: string | null,
  age: number,
  male: boolean,
  arrayOfObjects: {
    firstName: string | null,
    lastName: string
  }[]
}

const Practice = ({name, age, male, arrayOfObjects}: PracticeProps) => {
    return (
      <div className="App">
       <div>{name??"no name"}</div>
       {age && <div>{age}</div>}
       <div>{male? 'Male' : "female"}</div>
       {arrayOfObjects.map(({firstName, lastName}, i) =>
        <div key={i}>{`person ${i + 1} is ${firstName?? "no first"} ${lastName && lastName}`}</div>
       )}
      </div>
    );
  }

  export default Practice
 