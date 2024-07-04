import React from "react";
import { useForm } from "react-hook-form";
import classes from "./Modal.module.css";
import props from "prop-types";
Modal.propTypes = {
  showModal: props.bool.isRequired,
  setShowModal: props.func.isRequired,
};
export default function Modal({ showModal, setShowModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch("http://localhost:5500/register", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "complaints");
        window.alert("Your complaint is registered successfully!!");
        window.location.reload();
        let modalContainer = document.querySelector(".container2");
        modalContainer.style.display = "none";
      })
      .catch((error) => {
        console.log("ERROR:", error);
      });
  };

  return (
    <div className={classes.ComplaintModal}>
      <div
        className={classes.modal}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className={classes.modalContent}>
          <button onClick={() => setShowModal(false)} className="close-btn">
            X
          </button>
          <h1 className="text-2xl font-bold text-center">File a Complaint</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-box flex flex-col justify-center items-center gap-2 w-full mx-auto"
          >
            <div className="flex flex-col items-start gap-4 w-4/5 mx-auto">
              <label htmlFor="name">Name</label>
              <input
                {...register("name", { required: true })}
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                id="name"
                placeholder="Name"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col items-start gap-4 w-4/5 mx-auto">
              <label htmlFor="rollno">Roll No</label>
              <input
                {...register("rollno", { required: true })}
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                id="rollno"
                placeholder="Roll No"
              />
              {errors.rollno && <span>This field is required</span>}
            </div>
            <div className="flex flex-col items-start gap-4 w-4/5 mx-auto">
              <label htmlFor="roomno">Room No</label>
              <input
                {...register("roomno", { required: true })}
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                id="roomno"
                placeholder="Room No"
              />
              {errors.roomno && <span>This field is required</span>}
            </div>
            <div className="flex flex-col items-start gap-4 w-4/5 mx-auto">
              <label htmlFor="category">Choose Category</label>
              <select
                {...register("category", { required: true })}
                id="category"
                className="p-2 w-full border-2 border-gray-300 rounded-md"
              >
                <option value="">Select a category</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Mess">Mess</option>
                <option value="Ragging">Ragging</option>
                <option value="Other">Other</option>
              </select>
              {errors.category && <span>This field is required</span>}
            </div>
            <div className="flex flex-col items-start gap-4 w-4/5 mx-auto">
              <label htmlFor="description">Description</label>
              <textarea
                {...register("description", { required: true })}
                className="p-2 w-full border-2 border-gray-300 rounded-md"
                id="description"
                placeholder="Tell us more about the problem"
              />
              {errors.description && <span>This field is required</span>}
            </div>

            <button
              type="submit"
              className=" rounded-md bg-blue-500 p-2 px-4 text-lg text-white w-4/5 mx-auto"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
