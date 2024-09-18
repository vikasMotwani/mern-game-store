import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'


const Order = () => {
  const items = useSelector(state => state.cartItems);
  const navigate = useNavigate()
  const goBack = () => navigate(-1)


  let totalCart = 0;
  items.forEach(item => {
    totalCart += item.quantity * item.price;
  });

  return (
    <div className='p-4'>
      <div class="flex justify-center items-center lg:justify-start lg:pl-10 mt-7 mb-8" >
          <button class="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-300" onClick={goBack}>&lt; Back</button>
        </div>
        <div className='m-2 sm:mx-36'>

      <h1 className="text-3xl font-bold mb-4">Your order:</h1>
      {items.map((item, i) => (
        <div key={i} className="border border-gray-800 p-4 rounded-lg flex justify-between items-center mb-4">
          <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
          <div className="flex-1 ml-4">
            <h2 className="text-gray-800 font-bold text-lg">{item.name}</h2>
            <span className="text-gray-600">Quantity: {item.quantity} Price: {item.price} €&nbsp;</span>
           
          </div>
          <span className="text-gray-800 font-bold text-lg">{(item.quantity * item.price).toFixed(2)} €</span>
        </div>
      ))}
      <div className="border border-gray-800 p-4 rounded-lg">
        <span className="text-gray-800 font-bold text-lg">Total: {totalCart.toFixed(2)} €</span>
      </div>

        </div>
    </div>
  );
}

export default Order;
