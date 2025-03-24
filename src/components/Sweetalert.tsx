import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

interface SweetAlertComponentProps {
  title: string;
  text: string;
  icon: 'warning' | 'error' | 'success' | 'info' | 'question';
  confirmButtonText: string;
  onConfirm: () => void;
}

const SweetAlertComponent: React.FC<SweetAlertComponentProps> = ({
  title,
  text,
  icon,
  confirmButtonText,
  onConfirm,
}) => {
  const showAlert = () => {
    MySwal.fire({
      title: title,
      text: text,
      icon: icon,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: confirmButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      }
    }).catch(error => {
      console.error("Error displaying SweetAlert:", error);
    });
  };

  return (
    <button
      onClick={showAlert}
      className="w-44 h-10 font-semibold bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      {confirmButtonText}
    </button>
  );
};

export default SweetAlertComponent;
