import InputText from "../components/InputText";

export default function Home({results}) {

   results && console.log('results @ Home --> ', results)
  return (
    <div>
      <h1>Search</h1>
      <InputText />
      
    </div>
  );
}