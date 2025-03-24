
import { Link, useLoaderData, useNavigate, } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const assignment = useLoaderData()
    console.log(assignment);
    const navigate = useNavigate()
    


    const handelDelet = id =>{
        console.log(id)

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
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });

            fetch(`https://assignment-job-server-dkbc92rqk-sunil1986s-projects.vercel.app/assignments/${assignment._id}`, {
                method: 'DELETE'
            } )
            .then(res => res.json())
            .then(data =>{
                console.log(data);

                if(data.deletedCount > 0){
                        Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });

                              navigate('/')
                }
            })
            }
          });

       


           
                         
             
    }

    return (
        <div className="container mx-auto p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <img src={assignment.thumbnail} alt="Thumbnail" className="w-full h-60 object-cover rounded-md mb-4" />
        <h2 className="text-3xl font-bold">{assignment.title}</h2>
        <p className="text-gray-600 mt-2">{assignment.description}</p>
        <p className="text-gray-800 font-semibold mt-2">Marks: {assignment.marks}</p>
        <p className="text-gray-500">Difficulty: {assignment.difficulty}</p>
        <p className="text-gray-500">Due Date: {assignment.dueDate}</p>
        <div>
         <Link to='/apply'> <button className="btn btn-primary w-full">Apply Now!</button></Link>
        </div>

        {/* Back Button */}
        <div className='flex justify-between'>
            <div>
            <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Back
        </button>
            </div>
            <div className='flex gap-3'>
                <button onClick={() => handelDelet(assignment._id)}
                 className="btn mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-orange-600 ">Delete</button>
                <Link to={`/update/${assignment._id}`}>
                <button className="btn  mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-blue-600">Edit</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
    );
};

export default Details;