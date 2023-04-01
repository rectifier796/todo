import './App.css';
import Form from './Form';
import { DataList } from './DataContext';
import ShowList from './ShowList';


function App() {
  return (
    <div className="App">
      
     <DataList>
      <Form />
      <ShowList/>
    </DataList>
    </div>
  );
}

export default App;
