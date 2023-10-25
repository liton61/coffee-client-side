import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, chef, supplier, details, test, category, photo } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const details = form.details.value;
        const test = form.test.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const updateCoffee = { name, chef, supplier, details, test, category, photo };
        console.log(updateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee successfully updated !',
                        icon: 'success',
                        confirmButtonText: 'Okk'
                    })
                }
            })

    }
    return (
        <div className="bg-[#F4F3F0] p-28">
            <h1 className="text-center text-3xl font-bold mb-10">Update Coffee : {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Enter coffee name" defaultValue={name} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Chef</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="chef" placeholder="Enter coffee chef" defaultValue={chef} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Enter coffee supplier" defaultValue={supplier} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Test</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="test" placeholder="Enter coffee taste" defaultValue={test} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2 mr-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Enter coffee category" defaultValue={category} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Enter coffee details" defaultValue={details} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <div className="">
                    <div className="form-control w-full mr-4">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Enter photo url" defaultValue={photo} className="input focus:outline-none w-full" />
                        </label>
                    </div>
                </div>
                <input className="btn btn-neutral w-full mt-5" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;