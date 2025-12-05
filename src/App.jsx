import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [선택한글, 선택한글변경] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
   <div className='App'>
    <div className='black-nav'>
      <h4>ReactBlog</h4>
    </div>

    <button onClick={()=>{
      let copy = [...글제목];
      copy[0] = '여자 코트추천';
      글제목변경(copy);
    }}>글수정</button>

    <button onClick={ ()=>{ 
      let copy = [...글제목];
      copy.sort();
      글제목변경(copy)
    } }> 정렬버튼 </button>

    {
      글제목.map(function(a, i){
        return (
          <div className='list' key={i}>
            <div>
            <h4 onClick={()=>{ setModal(!modal); 선택한글변경(i); }}>{ 글제목[i] }
              <span onClick={(e) => {
                e.stopPropagation();  
                let 따봉각자 = [...따봉]; 
                따봉각자[i] += 1; 
                따봉변경(따봉각자);
                }}>👍</span>{따봉[i]} 

                <button onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...글제목];
                  copy.splice(i, 1);
                  글제목변경(copy);
                }}>글삭제</button>
                </h4>
            </div>
            <p>2월 17일 발행</p>
          </div>
        );
      })
    }

    <input onChange ={(e)=>{ 
      입력값변경(e.target.value);
      console.log(입력값)
      }}></input>

     <button onClick={()=>{
      let copy = [...글제목];
      copy.unshift(입력값);
      글제목변경(copy);
     }}>글발행</button>
    
      { 
      modal == true ? <Modal color={'yellow'} 글제목={글제목} 선택한글={선택한글} 글제목변경={글제목변경}/> : null
      }
   </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
      <h4>{props.글제목[props.선택한글]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목];
        copy[props.선택한글] = '여자 코트추천';
        props.글제목변경(copy);}}>글수정</button>
    </div>
  ) 
}

export default App