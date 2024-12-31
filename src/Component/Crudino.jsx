import React, { useEffect, useState } from "react"
import DataTable from "react-data-table-component";
import { rows } from "./datacurdion";
import { customStyles } from "./pageinations";
import { RiDeleteBin6Line } from "react-icons/ri";
import SweetAlert2 from 'react-sweetalert2';
import { withSwal } from 'react-sweetalert2';
import { ToastContainer, toast } from 'react-toastify'
function Curdino(){
    const [rowsdata,setrowsdata]=useState(rows)
const [searchText, setSearchText] = useState("");
const [isModalOpen, setIsModalOpen] = useState(false); // Control modal visibility
const [formData, setFormData] = useState({ id: "", Name: "", Email: "",age:"",parent_id:"" }); // Form data
const [successMessage, setSuccessMessage] = useState("");
const notify = () => toast("Wow so easy!");

    const columns = [
    { name: "ID",selector: row => row.id,sortable: true,},
    {name: "Name",selector: row => row.Name,sortable: true,
    },
    { name: "Email",selector: row => row.Email, sortable: true,
    },
    {name: "age",selector: row => row.age,sortable: true,
    },
    { name: "parent_id",selector: row => row.parent_id,sortable: true,},
    {name: "Actions",cell: (row) => (<button className="bg-white text-danger fs-bold" onClick={() => handleDelete(row.id)}><RiDeleteBin6Line /></button>),
    },
];
    useEffect(()=>{})
    const handleDelete = (id) => {
    const updatedRows = rowsdata.filter((row) => row.id !== id);
    setrowsdata(updatedRows);
  };
  const filteredData = rowsdata.filter(
    (row) =>{
        const nameMatch = row.Name && row.Name.toLowerCase().includes(searchText.toLowerCase());
        const emailMatch = row.Email && row.Email.toLowerCase().includes(searchText.toLowerCase());
        const idMatch = row.id && row.id.toString().toLowerCase().includes(searchText.toLowerCase()); // Convert to string
        const ageMatch = row.age && row.age.toString().toLowerCase().includes(searchText.toLowerCase()); // Convert to string
        const parentIdMatch = row.parent_id && row.parent_id.toString().toLowerCase().includes(searchText.toLowerCase()); // Convert to string
        return nameMatch || emailMatch || idMatch || ageMatch || parentIdMatch;
    }
    );

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        // Add new row to the table
        setrowsdata([...rowsdata, { ...formData, id: rowsdata.length + 1 }]);
        toast.success("Row added successfully!");
        setFormData({ id: "", Name: "", Email: "",age:"",parent_id:"" });
        handleCloseModal();
        // setTimeout(() => setSuccessMessage(""), 3000);
      };
    return (
        <div className="w-100 ">

      <div style={{ marginBottom: "20px" }} className=" col-12 d-flex justify-content-between">
        <input className="col-md-3 col-sm-5 col-xl-3"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: "8px",
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
        <button onClick={handleOpenModal} className="col-xl-3 col-md-3 col-sm-5 btn btn-success">Add Member</button>
      </div>
<DataTable columns={columns}
        fixedHeader
        pagination
        data={searchText ? filteredData : rowsdata}
        customStyles={customStyles}
        // selectableRows
         />

{isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
            background: "white",
            border: "1px solid #ddd",
            borderRadius: "8px",
            zIndex: 1000,
          }}
        >
          <h2>Add New Data</h2>
          <form onSubmit={handleFormSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <label>Name:</label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Email:</label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>parent id:</label>
              <input
                type="number"
                name="parent_id"
                value={formData.parent_id}
                onChange={handleInputChange}
                required
                style={{ marginLeft: "10px" }}
              />
            </div>
            <button type="submit" style={{ marginRight: "10px" }} className="btn btn-success">
              Add
            </button>
            <button type="button" onClick={handleCloseModal} className="btn btn-dark">
              Cancel
            </button>
          </form>
        </div>
      )}

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          onClick={handleCloseModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
        ></div>
      )}
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer  position="top-right" autoClose={3000} />
        </div>
    )
}
export default Curdino
// function Table(){


// }