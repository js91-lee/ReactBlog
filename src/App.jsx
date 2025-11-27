import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [선택한글, 선택한글변경] = useState(0);

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
  
    
    {/* <div className='list'>
      <h4>{ 글제목[0] }<span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span>
      {따봉} </h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4>{ 글제목[1] }</h4>
      <p>2월 17일 발행</p>
    </div>
    <div className='list'>
      <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
      <p>2월 17일 발행</p>
    </div> */}

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
                }}>👍</span>{따봉[i]}</h4>
            </div>
            <p>2월 17일 발행</p>
          </div>
        );
      })
    }
      { 
      modal == true ? <Modal color={'yellow'} 글제목={글제목} 선택한글={선택한글}/> : null
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
      <button>글수정</button>
    </div>
  ) 
}

export default App
