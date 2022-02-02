import './App.css';
import CustomSelect from './CustomSelect';

const styles = {
  select:{
    width: '100%',
    maxWidth: '600px',

  }
}



function App() {
  return (
    <div className="App">
      <h1>Choose a library</h1>
      <CustomSelect  style={styles.select}/>
    </div>
  );
}

export default App;
