import React from 'react'
import non1 from '../assets/non1.jpg'
import non2 from '../assets/non2.jpg'
import non3 from '../assets/non3.jpg'
import non12 from '../assets/non12.jpg'
import non10 from '../assets/non10.jpg'
import non6 from '../assets/non6.jpg'
import non4 from '../assets/non4.jpg'
import non5 from '../assets/non5.jpg'
import non7 from '../assets/non7.jpg'
import non8 from '../assets/non8.jpg'
import './Nonfiction.css'

import Footer from '../Footer/Footer'
import Navigation from '../components/Navigation'

function Nonfiction() {
  return (
    <div>
    <Navigation/>
    <div className='heeee'>
    <div className='products-heading'><h2>Non-Fiction Books</h2></div>
  <div className='bookproducts'>
    <div className='image-book-products-1'>
      <div><img src={non1} alt="" /></div>
      <div className='title-book-products-1'>
        <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p> 
      </div>
    </div>
    <div className='image-book-products-2'>
    <div><img src={non2} alt="" /></div>
    <div className='title-book-products-2'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div className='image-book-products-3'>
    <div><img src={non3} alt="" /></div>
    <div className='title-book-products-3'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={non4} alt="" /></div>
    <div className='title-book-products-4'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={non12} alt="" /></div>
    <div className='title-book-products-4'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
  </div>
  <div className='bookproducts'>
    <div className='image-book-products-1'>
      <div><img src={non5} alt="" /></div>
      <div className='title-book-products-1'>
        <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div className='image-book-products-2'>
    <div><img src={non6} alt="" /></div>
    <div className='title-book-products-2'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div className='image-book-products-3'>
    <div><img src={non7} alt="" /></div>
    <div className='title-book-products-3'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={non8} alt="" /></div>
    <div className='title-book-products-4'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
    <div>
    <div className='image-book-products-4'><img src={non10} alt="" /></div>
    <div className='title-book-products-4'>
    <p><a href="http://127.0.0.1:5500/Library-Mgnt-System-Frontend/src/Non-Fiction/nan.html">Learn  more ...</a></p>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  </div>
  )
}

export default Nonfiction

