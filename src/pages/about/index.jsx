import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/UserSlice";
import Header from "../../components/header";

const About = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    age: "",
    profession: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(form));
    setForm({ name: "", age: "", profession: "" });
  };

  return (
   <>
    <Header/>
     <div className="p-6 container ">
      <h1 className="text-xl font-bold mb-4 text-center mt-[100px]">Add User</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto ">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border p-2"
          placeholder="Name"
          required
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          className="border p-2"
          placeholder="Age"
          required
        />
        <input
          name="profession"
          value={form.profession}
          onChange={handleChange}
          className="border p-2"
          placeholder="Profession"
          required
        />
        <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">
          Save
        </button>
      </form>
    </div>
   </>
  );
};

export default About;
