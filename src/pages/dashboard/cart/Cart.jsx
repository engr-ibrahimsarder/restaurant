import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import usePublic from "../../../hooks/usePublic";
import Swal from "sweetalert2";

const Cart = () => {
  const [cart, refetch] = useCart()
  const axiosPublic = usePublic()
  const totalPrice = cart.reduce((total, totalPrice) => total + totalPrice.price, 0);

  const handleRemoveItem = (id) => {
    if (id) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/carts/${id}`)
            .then(res => { 
              if (res.data.deletedCount > 0) {
                Swal.fire({
                                  position: "top-center",
                                  icon: "success",
                                  title: "Delete Successfully!",
                                  showConfirmButton: false,
                                  timer: 1500
                                });
                refetch()
              }
            }) 
        }
      });
    }

  }

  return (
    <div>
      <div className=" flex gap-56 mt-10">
        <h2>CartItem: {cart.length}</h2>
        <h2>TotalPrice:${totalPrice} </h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  #SL
                </th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) =>
                <tr key={item._id}>
                  <th>
                    {index + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt={item.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button onClick={() => handleRemoveItem(item._id)} className="btn btn-ghost btn-xs">
                      <FaTrashAlt className="text-orange-400 text-xl"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              )}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;