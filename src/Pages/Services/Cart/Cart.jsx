import React, { useContext, useEffect, useState } from "react";
import bannar from "../../../assets/images/banner/4.jpg";
import { authContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useContext(authContext);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch(
      `https://y-p5bfrg1bs-mahmudul-hasans-projects-f649235f.vercel.app/checkout?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBooking(data);
      });
  }, []);

  const handleUpdate = (id) => {
    // console.log(id);
    fetch(
      `https://y-p5bfrg1bs-mahmudul-hasans-projects-f649235f.vercel.app/checkout/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "apllication/json",
        },
        body: JSON.stringify({ satus: "confrimed" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you Want to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://y-p5bfrg1bs-mahmudul-hasans-projects-f649235f.vercel.app/checkout/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = booking.filter((book) => book._id !== id);
              setBooking(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className=" relative">
        <img src={bannar} alt="" className="h-[300px] w-full" />
        <div className="w-full absolute top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="flex items-center mt-32 ml-20 ">
            <h1 className=" text-5xl text-white  font-bold">Cart Details</h1>
          </div>
        </div>
        {/* <div className="hero-content text-center text-neutral-content"> */}

        {/* </div> */}
      </div>
      <div className="text-center my-10 text-4xl font-bold ">
        <h1>
          Total Booking:{" "}
          <span className="text-[#ee6e64]">{booking.length}</span>
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}

          {booking.map((booked) => (
            <tbody key={booked._id}>
              {/* row 1 */}
              <tr>
                <th>
                  <button
                    onClick={() => handleDelete(booked._id)}
                    className="btn btn-circle btn-outline"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booked.img}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{booked.title}</div>
                      <div className="text-sm opacity-50">
                        {booked.customar}
                      </div>
                    </div>
                  </div>
                </td>
                <td>{booked.price}</td>
                <td>{booked.date}</td>
                <th>
                  <td>
                    <button onClick={() => handleUpdate(booked._id)}>
                      Please Confirm
                    </button>
                  </td>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Cart;
