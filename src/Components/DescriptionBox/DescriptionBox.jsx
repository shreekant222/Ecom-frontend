import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
     <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
     </div>
        <div className="descriptionbox-description">
            <p>
             E-commerce, short for electronic commerce, refers to the buying and selling of goods and services over the internet. It has revolutionized the way businesses operate and consumers shop, offering convenience, accessibility, and a wide array of choices. In the realm of e-commerce, transactions are conducted electronically, allowing customers to browse, select, and purchase products from the comfort of their homes or on-the-go using electronic devices such as computers, smartphones, or tablets.</p>
        <p>One of the key benefits of e-commerce is its convenience. Consumers can browse and purchase items from the comfort of their homes, eliminating the need to visit physical stores. This accessibility has significantly expanded the reach of businesses, allowing them to tap into new markets and demographics.</p>
        </div>
    </div>
  )
}

export default DescriptionBox