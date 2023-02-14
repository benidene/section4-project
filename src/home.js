import todoList from "./todoComponents/TodoList";

const Home = ({todos }) => {
    return (
      <div className="home">
        {todos && <todoList todos={todos} />}
      </div>
    );
}
  
export default Home; 