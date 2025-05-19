import React from 'react';

const About = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="mb-4">About <span className="text-primary">iNotebook</span></h1>
            <p className="lead text-muted">
              A smarter way to keep your thoughts organized, accessible, and secure — wherever life takes you.
            </p>
            <hr className="my-4 w-50 mx-auto" />
            <p>
              <strong>iNotebook</strong> is built for simplicity and efficiency. Whether you're a student managing coursework,
              a professional tracking projects, or just someone who loves to jot things down — this app helps you keep everything in one safe place.
            </p>
            <p>
              Your notes sync across devices and remain secure with strong encryption. No clutter. No distractions. Just your ideas, neatly stored and always ready.
            </p>
            <p>
              Designed to be fast, reliable, and distraction-free — so you can focus on what matters most: your thoughts.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-4 mt-5 border-top" style={{ width: '100%' }}>
        <div>
          <p className="mb-1 text-muted">© {new Date().getFullYear()} iNotebook</p>
          <p className="mb-0 text-secondary" style={{ fontSize: '0.9rem' }}>
            Built by <strong>Ayush Rawat</strong> — Full-Stack Developer
          </p>
        </div>
      </footer>
    </>
  );
};

export default About;
