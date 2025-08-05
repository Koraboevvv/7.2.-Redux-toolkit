import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/features/UserSlice";
import Header from "../../components/header";

const Home = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="container">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
            User List
          </h1>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="bg-indigo-600 text-white text-left">
                  <th className="py-3 px-6 uppercase text-sm font-semibold">
                    Name
                  </th>
                  <th className="py-3 px-6 uppercase text-sm font-semibold">
                    Age
                  </th>
                  <th className="py-3 px-6 uppercase text-sm font-semibold">
                    Profession
                  </th>
                  <th className="py-3 px-6 uppercase text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((u, inx) => (
                  <tr
                    key={inx}
                    className="border-b hover:bg-indigo-50 transition-colors duration-200"
                  >
                    <td className="py-3 px-6">{u.name}</td>
                    <td className="py-3 px-6">{u.age}</td>
                    <td className="py-3 px-6">{u.profession}</td>
                    <td className="py-3 px-6">
                      <button
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-1 rounded shadow transition"
                        onClick={() => dispatch(deleteUser(inx))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="text-center py-6 text-gray-500 italic"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
