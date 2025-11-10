import React, { useRef } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyProperty = ({ property, deleteProperty }) => {
  const updateModalRef = useRef(null);
  const {
    _id: propertyId,
    property_name,
    category,
    property_location,
    property_price,
    property_img_url,
  } = property;

  //   handle delete btn
  const handleDeleteProperty = (propertyId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/properties/${propertyId}`, {
          method: "DELETE",
        }).then((res) =>
          res.json().then((data) => {
            console.log("after deleting data:", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Property has been deleted.",
                icon: "success",
              });

              //ui update
              deleteProperty(propertyId);
            }
          })
        );
      }
    });
  };

  return (
    <div
      key={property._id}
      className="bg-white flex flex-col rounded-lg overflow-hidden "
    >
      {/* card img  */}
      <div>
        <img
          className="w-full h-70 p-2 rounded-xl object-cover"
          src={property_img_url}
          alt={property_img_url}
        />
      </div>
      {/* card content  */}
      <div className="p-3 flex-1">
        <h3 className="font-semibold text-2xl">${property_price}</h3>
        <h2 className="font-bold text-3xl">{property_name}</h2>
        <p>Location: {property_location}</p>
      </div>

      <div className="p-3">
        <span className="flex justify-between items-center gap-2">
          <p className="flex-2 ">Posted Date: {"10, February, 2025"}</p>
          <p
            className={`flex-1 py-1 rounded-2xl text-center ${
              property.category === "Rent"
                ? "bg-green-100 text-green-700"
                : property.category === "Sale"
                ? "bg-blue-100 text-blue-700"
                : "bg-yellow-100 text-yellow-700"
            } `}
          >
            {category}
          </p>
        </span>
      </div>

      {/* card Buttons  */}
      <div className="flex justify-between gap-4 p-2">
        <button
          onClick={() => updateModalRef.current.showModal()}
          className=" flex-1 btn border-2 hover:text-white border-[#FF385C] hover:bg-[#FF385C] rounded-full"
        >
          Update
        </button>
        <Link
          to={`/propertydetails/${propertyId}`}
          className=" flex-2 btn border-2 hover:text-white border-[#FF385C] hover:bg-[#FF385C] rounded-full"
        >
          View Details
        </Link>
        <button
          onClick={() => handleDeleteProperty(propertyId)}
          className=" flex-1 btn border-2 hover:text-white border-[#FF385C] hover:bg-[#FF385C] rounded-full"
        >
          Delete
        </button>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog
        ref={updateModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProperty;
