import React from 'react';

const FAQ = () => {

    const faqs = [
        {
          question: "How do I create an assignment?",
          answer: "Go to the 'Create Assignment' page, fill in the details, and submit."
        },
        {
          question: "Can I edit or delete an assignment?",
          answer: "Yes, you can edit or delete your own assignments from the 'Assignments' page."
        },
        {
          question: "How does grading work?",
          answer: "Users can evaluate and grade assignments submitted by others."
        },
        {
          question: "Is this platform free to use?",
          answer: "Yes! The platform is completely free for all users."
        }
      ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} tabIndex={0} className="collapse collapse-plus bg-base-100 border border-base-300">
            <div className="collapse-title font-semibold text-lg">
              {faq.question}
            </div>
            <div className="collapse-content text-sm">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FAQ;