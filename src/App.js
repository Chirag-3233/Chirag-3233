import './App.css';
import Header from './components/Header';
import Quotes from './components/Quotes';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <Header />
      <Quotes />
      <TodoList />
    </div>
  );
}

export default App;
