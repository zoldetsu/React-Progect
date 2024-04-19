import Cost from "./components/costs/Cost";

function App() {

  const costs = [
    {
      date: new Date(2021,1,12),
      description: "Холодильник",
      amount: '$999.99'
    },
    {
      date: new Date(2021,11,25),
      description: "MacBook",
      amount: '$1239.99'
    },
    {
      date: new Date(2021,4,1),
      description: "Джинсы",
      amount: '$300.99'
    }    
  ]

  return (
    <div>
      <h2>begining</h2>
      <Cost costs={costs}/>
    </div>
  );
}

export default App;
