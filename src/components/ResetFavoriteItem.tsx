import { resetFavoriteData } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";
import SweetAlertComponent from "./Sweetalert";
import Swal from 'sweetalert2';

const ResetFavoriteItem: React.FC = () => {
  const dispatch = useDispatch();

  const handleResetCart = () => {
      dispatch(resetFavoriteData())
      Swal.fire('Reset!','Your favorite has been reset.','success');
  };
  return (
    <div>
      <SweetAlertComponent
        title="Are you sure?"
        text="Are you sure you want to reset your favorite items?"
        icon="warning"
        confirmButtonText="Reset Favorite"
        onConfirm={handleResetCart}
      />
    </div>
  );
};

export default ResetFavoriteItem;
