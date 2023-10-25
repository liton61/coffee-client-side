import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadUser = useLoaderData();
    const [users, setUsers] = useState(loadUser);
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Users List</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadUser.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>Coffee Shop</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn">Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;