import './App.css';
import { useState } from 'react';

function App(){
  const [email , setEmail] = useState('');
  const [loading , setLoading] = useState(false);
  const submitFunction = async(e) => {
    e.preventDefault();
    setLoading(true);
    fetch('http://34.225.132.160:8002/api', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-type': 'application/json' },
    })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      //console.log(data.message , data.detail);
      if(data.message)
        setEmail(data.message);
      else
        setEmail(data.detail);
    })
    .catch((err) => {
      console.log(err.message);
    });
    setLoading(false);
  }
  return (
    <div className="App">
      <div className='first_block'>
        <img className='logo-image' src='/assets/EZ Works Blue.png' alt='logo'/>
        <div className='first_text'> A Suite Of Business Support Services </div>
        <div className='second_line'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </div>
        <form className='form_class mobile-hidden' onSubmit={submitFunction}>
          <input 
            className='input_field' 
            type='email'
            value={email}  
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
            required >
          </input>
          <button className='btn' type='submit'> {loading ? ('Loading...') : ('Contact Me')} </button>
        </form>
      </div>
      <div className='second_block'>
        <div className='second_block_part1'>
          <div className='service_block'>
            <div className='service_block_part1'>
              <img className='logo-image-class' src='/assets/Research@4x-5.png' alt='pic'/>
              <img className='head-image-class' src='/assets/Presentation Design.svg' alt='pic'/>
            </div>
            <img className='data-image-class' src='/assets/Lorem.svg' alt='pic' />
          </div>
          <div className='service_block'>
            <div className='service_block_part1'>
              <img className='logo-image-class' src='/assets/Research@4x-2.png' alt='pic'/>
              <img className='head-image-class' src="/assets/Audio - Visual Production.svg" alt="pic" />
            </div>
            <img className='data-image-class' src='/assets/Lorem.svg' alt='pic' />
          </div>
          <div className='service_block'>
            <div className='service_block_part1'>
              <img className='logo-image-class' src='/assets/Research@4x-1.png' alt='pic'/>
              <img className='head-image-class' src="/assets/TranslationServices.svg" alt="pic" />
            </div>
            <img className='data-image-class' src='/assets/Lorem.svg' alt='pic' />
          </div>
        </div>
        <div className='second_block_part2'>
          <div className='service_block'>
            <div className='service_block_part1'>
              <img className='logo-image-class' src='/assets/Research@4x-4.png' alt='pic'/>
              <img className='head-image-class' src="/assets/Graphic Design.svg" alt="pic" />
            </div>
            <img className='data-image-class' src='/assets/Lorem.svg' alt='pic' />
          </div>
          <div className='service_block'>
            <div className='service_block_part1'>
              <img className='logo-image-class' src='/assets/Research@4x.png' alt='pic'/>
              <img className='head-image-class' src="/assets/Research & Analytics.svg" alt="pic" />
            </div>
            <img className='data-image-class' src='/assets/Lorem.svg' alt='pic' />
          </div>
          <div className='service_block'>
            <div className='service_block_part1'>
              <img className='logo-image-class' src='/assets/Research@4x-3.png' alt='pic'/>
              <img className='head-image-class' src="/assets/Data Processing.svg" alt="pic" />
            </div>
            <img className='data-image-class' src='/assets/Lorem.svg' alt='pic' />
          </div>
        </div>
      </div>
      <form className='form_phone_class comp-hidden' onSubmit={submitFunction}>
        <input 
          className='input_field_phone' 
          autoComplete='off'
          type="email"
          value={email}  
          onChange={ (e) =>setEmail(e.target.value) }
          placeholder='Email Address'
          required >
        </input>
        <button className='btn_phone' type='submit'> { loading ? ('Loading...') : ('Contact Me')} </button>
      </form>
    </div>
  );
}

export default App;
