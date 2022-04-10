import React from 'react';

function App() {
  return (
    <div className='p-40'>
      <h1 className=' text-4xl font-bold'>HOME</h1>
      <div className='mt-5'>
        <button className=' bg-yellow-400 text-white rounded-lg p-2 mr-2'>
          카카오 로그인
        </button>
        <button className='bg-black text-white rounded-lg p-2'>로그아웃</button>
      </div>
      <div className='mt-5'>
        사용자 정보: <span></span>
      </div>
    </div>
  );
}

export default App;
