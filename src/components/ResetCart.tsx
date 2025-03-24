import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCart } from "@/store/nextSlice"; 
import SweetAlertComponent from './Sweetalert';
import Swal from 'sweetalert2';

const ResetCart: React.FC = () => {
  const dispatch = useDispatch();

  const handleResetCart = () => {
    dispatch(resetCart());
    Swal.fire('Reset!','Your cart has been reset.','success');
  };

  return (
    <div>
      <SweetAlertComponent
        title="Are you sure?"
        text="Are you sure you want to reset your cart items?"
        icon="warning"
        confirmButtonText="Reset Cart"
        onConfirm={handleResetCart}
      />
    </div>
  );
};

export default ResetCart;
