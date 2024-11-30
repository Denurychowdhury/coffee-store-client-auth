import { key } from "localforage";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {

    const loadedUser = useLoaderData();
    console.log(loadedUser);

    const [users, setUsers] = useState(loadedUser);
    const handleUserDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('delete is done', data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = users.filter(user => user._id !== id);
                            setUsers(remaining)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <h2 className="text-3xl">
                users:{users.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Created at</th>
                            <th>Last login at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users && users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.creatdeat}</td>
                                    <td>{user.lastSignInTime}</td>
                                    <td>
                                        <button className="btn">E</button>
                                        <button
                                            onClick={() => handleUserDelete(user._id)}
                                            className="btn"
                                        >
                                            x
                                        </button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;