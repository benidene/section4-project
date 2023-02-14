import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

const Navbar = lazy(() => import('./components/Navbar'));
const CreateTodo = lazy(() => import('./todoComponents/CreateTodos'));
// const useInput= lazy(() => import('./util/useInput'));

function App() {
  const [todos, settodos] = useState(null);
  const [error, setError] = useState(null);

  /* get 메소드를 통해 데이터를 받아오는 useEffect hook은 컴포넌트 내 여기저기 존재하고 있습니다. */
  /* 해당 hook은 반복이 되는 부분이 있으므로 어떻게 custom hook으로 만들 수 있을지 고민해 봅시다. */
  /* util 폴더 내에 존재하는 useFetch에 custom hook을 작성해 주세요. */
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:3001/todos')
      .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } 
        return res.json();
      })
      .then(data => {
        settodos(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      })
    }, 1000);
  }, [])

  return (
    <BrowserRouter>
            { error && <div>{ error }</div> }
                <div className="app">
                    <Navbar />
                    <div className="content">
                      <useInput />
                        <Routes>
                            <Route path="/create" element={<CreateTodo todos={todos} />} />
                        </Routes>
                    </div>
                </div>
        </BrowserRouter>
    );
}


export default App;
