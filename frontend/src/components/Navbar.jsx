import { Link } from "react-router-dom";
//prop validation
import PropTypes from "prop-types";
Navbar.propTypes = {
  setShowModal: PropTypes.func.isRequired,
};

export default function Navbar({ setShowModal }) {
  function setModal(e) {
    e.preventDefault();
    setShowModal(true);
  }
  return (
    <>
      <div className="" id="navbar p-4">
        <ul className="flex gap-5 max-h-[100px] items-center justify-between mb-10 p-4">
          <li className="">
            <Link to={"/"}>
              <img className="filter bg-blend-normal hover:scale-105" alt="logo" src="/kgplogo.jpg" height={80} width={80} />
            </Link>
          </li>
          <li>
            <h1 className="text-2xl font-extrabold ">
              RadhaKrishan Hall of Residence
            </h1>
          </li>
          <li>
            <button onClick={(e) => setModal(e)} className="bg-orange-500 font-bold p-2 rounded-md text-white hover:scale-90 ">
              File a Complaint
            </button>
          </li>
        </ul>

      </div>
    </>
  );
}
