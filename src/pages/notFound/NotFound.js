import { Button } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './notFoundStyle.scss'
const Notfound = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('inforUser')); 
  const handleBacktoHome = () => {
    if (user?.role === '2') {
      return history.push("/");
    } else if (user?.role === '1'){
     return history.push("/admin/dashboard");
    } else {
      return history.push("/");
    }
  }
  return (
    <div >
      <img id='img404' src='http://www.hopital-lozere.fr/wp-content/uploads/2017/05/giphy-3-1.gif' alt='404'/>
      <Button type='primary' className='btnNotFound' onClick={()=> handleBacktoHome()}>Back to Home</Button>
    </div>
  );
}

export default Notfound;
