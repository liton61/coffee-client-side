/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee, setCoff, coff }) => {
    const { _id, name, chef, supplier, details, test, category, photo } = coffee;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = coff.filter(cof => cof._id !== _id);
                            console.log(remaining)
                            setCoff(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="relative flex h-full w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={photo}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="flex justify-center items-center">
                    <div className="p-6">
                        <h4 className="mb-2 block font-sans text-base font-semibold">
                            <span className="text-lg font-semibold">Name :</span> {name}
                        </h4>
                        <h4 className="mb-2 block font-sans text-base font-semibold">
                            <span className="text-lg font-semibold">Chef :</span> {chef}
                        </h4>
                        <h4 className="mb-2 block font-sans text-base font-semibold">
                            <span className="text-lg font-semibold">Category :</span> {category}
                        </h4>
                    </div>
                    <div>
                        <div className="btn-group btn-group-vertical">
                            <button className="btn my-2">View</button>
                            <Link to={`updateCoffee/${_id}`}>
                                <button className="btn my-2">Edit</button>
                            </Link>
                            <button onClick={() => handleDelete(_id)} className="btn my-2">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;