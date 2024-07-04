import React, { useEffect, useState } from "react";


export default function Complaint() {
  const [category, setCategory] = useState("All");
  console.log(import.meta.env.VITE_BACKEND_URL);
  const filteredData = category === "All" ? data : data.filter(item => item.category === category);
  function getComplaints() {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/get/complaints`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
    catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getComplaints();
  }, [category]);
  return (
    <div id="complaint-section" className="w-full flex justify-center items-center flex-col">
      <h1 className="font-extrabold text-3xl">Complaints</h1>
      <table id="com-table" className="w-4/5 p-0 my-5">
        <thead className="bg-transparent">
          <tr className="py-8 ">
          {  tableHeadings.map((heading, id) => (
              <th key={id} className="font-semibold p-1 m-1 text-2xl uppercase font-sarif" scope="col">{heading}</th>
            ))
          }
          </tr>
        </thead>
        <tbody className=" ">
          {filteredData.map((i, id) => (
            <React.Fragment key={id}>
              <tr className="py-8">
                <td className="text-center font-normal p-1 m-1 text-lg font-sans" >{i.name}</td>
                <td className="text-center font-normal p-1 m-1 text-lg font-sans">{i.rollno}</td>
                <td className="text-center font-normal p-1 m-1 text-lg font-sans">{i.roomno}</td>
                <td className="text-center font-normal p-1 m-1 text-lg font-sans">{i.category}</td>
                <td className="text-center font-normal p-1 m-1 text-lg font-sans">{i.status}</td>
                <td className="text-center font-normal p-1 m-1 text-lg font-sans">{i.date}</td>
                {/* <td>
                  <img src="../../../public/logo/img2.svg" alt="dropdown" />
                </td> */}
              </tr>
              {/* <tr className="complaint-para">
                <td colSpan={6}>{i.description}</td>
              </tr> */}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}


//creating a dummy data for complaints
const tableHeadings = [
  "Name",
  "Roll NO",
  "Room NO",
  "Category",
  "Status",
  "Date",
];
const data = [
  {
    name: "Rahul",
    rollno: "19CS10041",
    roomno: "A-101",
    category: "Mess",
    status: "Pending",
    date: "12/12/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Rahul",
    rollno: "19CS10041",
    roomno: "A-101",
    category: "Maintenance",
    status: "Pending",
    date: "12/12/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Rahul",
    rollno: "19CS10041",
    roomno: "A-101",
    category: "Ragging",
    status: "Pending",
    date: "12/12/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    name: "Rahul",
    rollno: "19CS10041",
    roomno: "A-101",
    category: "Other",
    status: "Pending",
    date: "12/12/2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];