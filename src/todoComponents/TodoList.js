import { Link } from "react-router-dom";

const BlogList = ({ todos }) => {
    return (
        <div className="todo-list">
            {todos.map(todos => (
            <div className="todo-preview" key={todos.id} >
                <Link to={`/todos/${todos.id}`}>
                    <h2>{ todos.title }</h2>
                </Link>
            </div>
            ))}
        </div>
        
    )
  }
  
  export default BlogList; 