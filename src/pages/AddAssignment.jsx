import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddAssignment = () => {
  const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const form = e.target;
      const assignment = {
        title: form.title.value,
        description: form.description.value,
        marks: form.marks.value,
        thumbnail: form.thumbnail.value,
        difficulty: form.difficulty.value,
        dueDate: form.dueDate.value,
      };
      
      console.log(assignment);

       fetch("https://server-side-of-job.vercel.app/assignments", {
        method: "POST",
        headers: {
             "Content-Type": "application/json" 
            },
        body: JSON.stringify(assignment),
      })
      .then(res => res.json())
      .then (data =>{
        console.log(data);

        if( data.insertedId ){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Assignment is Add",
                showConfirmButton: false,
                timer: 1500
              })
              .then(() => {
                navigate('/'); 
            });
        }

      })
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Add Assignment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
  
            <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>
  
            <input type="number" name="marks" placeholder="Marks" className="input input-bordered w-full" required />
  
            <input type="text" name="thumbnail" placeholder="Thumbnail URL" className="input input-bordered w-full" required />
  
            <select name="difficulty" className="select select-bordered w-full">
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
  
            <input type="date" name="dueDate" className="input input-bordered w-full" required />
  
            <button type="submit" className="btn btn-primary w-full">Add Assignment</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default AddAssignment;