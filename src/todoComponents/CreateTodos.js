import useInput from "../util/useInput";
import Input from "../components/Input";
import { fetchCreate } from "../util/api";

const CreateTodos = ({todos}) => {
    const [title, titleBind] = useInput('');
    const [body, bodyBind] = useInput('');
    const [author, authorBind] = useInput('김코딩');

    // select 컴포넌트에 들어가는 uniqueArr 속성에 todos라고 보내보세요.
    // 작성자 부분에 중복되는 이름이 보이는 것을 확인할 수 있을 것입니다.
    // 중복되는 작성자의 이름을 어떻게 걸러내고 작성자 이름 하나만 남길 수 있는지 밑의 로직을 분석합니다.
    const authrUnique = todos && (todos.filter((character, idx, arr) => {
        return arr.findIndex(item => item.author === character.author) === idx
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {title, body, author, likes: 0}
        fetchCreate("http://localhost:3001/todos/", data)
    }

    return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <Input label={"제목"} value={titleBind} />
            <button>등록</button>
        </form>
      </div>
    )
  }
  
  export default CreateTodos;