import { Link, useParams } from 'react-router-dom';
import products from './data';
const SingleProduct = () => {
    const {productId} = useParams();
    console.log(productId);
    const selectedProduct = products.find(product => product.id === productId);
    const {image,id,name} = selectedProduct;
    return (
        <section className='section product' key={id}>
        <img src={image} alt={name} />
        <h5>{name}</h5>
        <Link className='btn' to='/products'>back to products</Link>
      </section>
    );
  };
  
  export default SingleProduct;