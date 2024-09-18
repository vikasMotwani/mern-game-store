import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector, useDispatch } from "react-redux";
import { deleteCart, decreaseQuantity, increaseQuantity } from "../../../../redux";
import { Link } from "react-router-dom"


export default function NavCart(props) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartItems);
  useSelector(state => state.numberItems) // The component listen changes of the this part of the state to update

  let TotalCart = 0;
  items.forEach(item => {
    TotalCart += item.quantity * item.price;
  });



  return <>

    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => props.setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {items.map((item, i) => (
                              <li key={i} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <div className='flex flex-col'>
                                        <h3>
                                          <Link to={`/product/${item.id}`} onClick={() => props.setOpen(false)}>
                                            {item.name}
                                          </Link>
                                          <p className="ml-0 text-gray-500">{Number(item.price).toFixed(2)} €</p>

                                        </h3>


                                      </div>
                                      <p className="ml-4">{Number(item.price * item.quantity).toFixed(2)} €</p>

                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.publisher}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <button className="cursor-pointer p-1" onClick={() => {
                                      dispatch(decreaseQuantity(i))
                                    }}>-</button>
                                    <p className="text-gray-500 p-1">Qty {item.quantity}</p>
                                    <button className=" cursor-pointer p-1" onClick={() => {
                                      dispatch(increaseQuantity(i))
                                    }}>+</button>

                                    <div className="flex">
                                      <button onClick={() => { dispatch(deleteCart(i)) }}
                                        type="button"
                                        className="font-medium text-gray-800 hover:border-gray-800 hover:border-2 p-1"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{Number(TotalCart).toFixed(2)} €</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        {items.length > 0 ? <Link to="/order"
                          onClick={() => props.setOpen(false)}
                          className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 hover:bg-gray-600  px-6 py-3 text-base font-medium text-white shadow-sm "
                        >
                          Checkout
                        </Link> : <button
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 opacity-50 cursor-not-allowed px-6 py-3 text-base font-medium text-white shadow-sm"
                          disabled
                        >
                          Checkout
                        </button>}

                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-800">
                        <p>
                          or&nbsp;
                          <button
                            type="button"
                            className="font-medium text-black-500 hover:text-green-500"
                            onClick={() => props.setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  </>
}