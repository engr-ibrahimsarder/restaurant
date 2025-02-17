import { useQuery } from "@tanstack/react-query";
import usePublic from "../../../../hooks/usePublic";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";

const AllUser = () => {
  const axiosPublic = usePublic();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });
  return (
    <div className="">
      <h2 className="text-base ">All User:{users?.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button>
                      <FaUserEdit></FaUserEdit>
                    </button>
                  </td>
                  <td>
                    <button>
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
