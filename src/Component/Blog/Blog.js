import React from 'react';

const Blog = () => {
    return (
        <div className='m-8 py-8 flex gap-3'>
             <div className='text-left border rounded border-indigo-600 bg-slate-300'>
                <h3 className='text-2xl text-blue-600'> What is purpose of React Router?</h3> <br />
                <p className='text-xl text-blue-600/75'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
             </div>
             <div className='text-left border rounded border-indigo-600 bg-slate-300'>
                  <h3 className='text-2xl text-blue-600'>How does context API work?</h3><br />
                  <p className='text-xl text-blue-600/75'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
             </div>
             <div className='text-left border rounded border-indigo-600 bg-slate-300'>
                <h3 className='text-2xl text-blue-600'>What is the useRef hook?</h3><br />
                <p className='text-xl text-blue-600/75'>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
             </div>
        </div>
    );
};

export default Blog;