import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import bannar from "../assets/images/banner/4.jpg";
import { authContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const ProcedOut = () => {
  const loader = useLoaderData();
  const { user } = useContext(authContext);
  const { img, title } = loader;
  // console.log(loader);

  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value;
    const message = form.message.value;
    const order = { title, customar: name, price, email, message, date, img };
    console.log(order);
    fetch(
      "https://y-p5bfrg1bs-mahmudul-hasans-projects-f649235f.vercel.app/checkout",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your ordered has been confirm",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div className=" relative">
        <img src={bannar} alt="" className="h-[300px] w-full" />
        <div className="w-full absolute top-0 h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
          <div className="flex items-center mt-32 ml-20 ">
            <h1 className=" text-5xl text-white  font-bold">Check Out </h1>
          </div>
        </div>
      </div>

      <form onSubmit={handleOrder}>
        <div className="bg-[#f3f3f3] p-20 my-20">
          <div className="space-y-7 w-5/6 mx-auto">
            <div className="md:flex gap-5  my-5">
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered input-warning w-full "
                // defaultValue={loader.title}
                name="name"
                required
              />
              <input
                type="date"
                placeholder="Last Name"
                className="input input-bordered input-warning w-full"
                name="date"
                required
              />
            </div>
            <div className="md:flex gap-3 my-5">
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered input-warning w-full "
                defaultValue={loader.price}
                name="price"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered input-warning w-full"
                defaultValue={user.email}
                name="email"
                required
              />
            </div>
            <textarea
              placeholder="Your message"
              className="textarea textarea-bordered textarea-lg w-full "
              name="message"
              required
            ></textarea>

            <button className="w-full text-white p-3 rounded-xl bg-[#ff3811]">
              <input type="submit" value=" Oder Confirm" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProcedOut;
