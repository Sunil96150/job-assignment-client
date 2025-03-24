import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const assignment = useLoaderData(); // Get assignment from loader
  const navigate = useNavigate();

  // Initialize state with existing assignment data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    marks: "",
    thumbnail: "",
    difficulty: "Easy",
    dueDate: "",
  });

  // Populate form data with the assignment from the loader
  useEffect(() => {
    if (assignment) {
      setFormData({
        title: assignment.title || "",
        description: assignment.description || "",
        marks: assignment.marks || "",
        thumbnail: assignment.thumbnail || "",
        difficulty: assignment.difficulty || "Easy",
        dueDate: assignment.dueDate || "",
      });
    }
  }, [assignment]);

  // Handle form submission
  const handleUpdateAssignment = async (e) => {
    e.preventDefault();

    const updatedAssignment = {
      ...formData,
    };

    // Send the PUT request with the correct ID
    fetch(`https://assignment-job-server-1enukzb23-sunil1986s-projects.vercel.app/assignments/${assignment._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedAssignment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Assignment updated successfully!",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/"); // Redirect to home page after update
        }
      })
      .catch((error) => console.error("Error updating assignment:", error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Update Assignment</h2>
        <form onSubmit={handleUpdateAssignment} className="space-y-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Title"
            className="input input-bordered w-full"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>

          <input
            type="number"
            name="marks"
            value={formData.marks}
            onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
            placeholder="Marks"
            className="input input-bordered w-full"
            required
          />

          <input
            type="text"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            placeholder="Thumbnail URL"
            className="input input-bordered w-full"
            required
          />

          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
            className="select select-bordered w-full"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
            className="input input-bordered w-full"
            required
          />

          <button type="submit" className="btn btn-primary w-full">
            Update Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
