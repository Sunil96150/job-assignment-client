import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Apply = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        roll: '',
        cgpa: '',
        course: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.roll || !formData.cgpa || !formData.course) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all required fields!'
            });
            return;
        }

        Swal.fire({
            title: 'Confirm Application?',
            text: "Are you sure you want to apply?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Apply!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Applied!', 'Your application has been submitted.', 'success');
                setFormData({ name: '', email: '', phone: '', roll: '', cgpa: '', course: '', message: '' });
            }
        });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-bold text-center mb-4">Apply for Assignment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" required />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="input input-bordered w-full" required />
                <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="input input-bordered w-full" required />
                <input type="text" name="roll" placeholder="Roll Number" value={formData.roll} onChange={handleChange} className="input input-bordered w-full" required />
                <input type="text" name="cgpa" placeholder="CGPA" value={formData.cgpa} onChange={handleChange} className="input input-bordered w-full" required />
                <input type="text" name="course" placeholder="Course Name" value={formData.course} onChange={handleChange} className="input input-bordered w-full" required />
                <textarea name="message" placeholder="Additional Message (Optional)" value={formData.message} onChange={handleChange} className="textarea textarea-bordered w-full"></textarea>
                <button type="submit" className="btn btn-primary w-full">Submit Application</button>
            </form>
        </div>
    </div>
    );
};

export default Apply;