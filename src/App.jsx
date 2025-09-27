import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

const posts = [
  { id: 1, title: 'Welcome to My Blog', content: 'This is the first post on your new blog!' },
  { id: 2, title: 'React + Vite', content: 'Learn how to use React with Vite for fast development.' },
  { id: 3, title: 'Data Structures', content: 'Explore key concepts in Data Structures for Computer Engineering. Useful resources: <a href="https://www.geeksforgeeks.org/data-structures/" target="_blank" rel="noopener noreferrer">GeeksforGeeks Data Structures</a>' },
  { id: 4, title: 'Operating Systems', content: 'Learn about Operating Systems principles and design. Useful resources: <a href="https://www.tutorialspoint.com/operating_system/index.htm" target="_blank" rel="noopener noreferrer">TutorialsPoint OS</a>' },
  { id: 5, title: 'Computer Networks', content: 'Understand Computer Networks and protocols. Useful resources: <a href="https://www.coursera.org/learn/computer-networking" target="_blank" rel="noopener noreferrer">Coursera Computer Networking</a>' },
  { id: 6, title: 'Database Management Systems', content: 'Study DBMS concepts and SQL. Useful resources: <a href="https://www.javatpoint.com/dbms-tutorial" target="_blank" rel="noopener noreferrer">JavaTpoint DBMS</a>' },
  { id: 7, title: 'Software Engineering', content: 'Introduction to Software Engineering methodologies. Useful resources: <a href="https://www.tutorialspoint.com/software_engineering/index.htm" target="_blank" rel="noopener noreferrer">TutorialsPoint SE</a>' },
  { id: 8, title: 'Web Technologies', content: 'Learn about HTML, CSS, JavaScript, and modern web frameworks. Useful resources: <a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank" rel="noopener noreferrer">MDN Web Docs</a>' },
];

function Home() {
  return (
    <div className="container">
      <header className="header">
  <h1>🚀 Mushtaq Ah Dar</h1>
        <p className="subtitle">Welcome to your new blog powered by <span className="highlight">React</span> & <span className="highlight">Vite</span>!</p>
        <Link to="/posts" className="btn-primary">View Posts</Link>
      </header>
    </div>
  );
}

function About() {
  return (
    <div className="container">
      <h2 className="section-title">About</h2>
      <div className="post-content" style={{textAlign:'center'}}>
  <img src="/mushtaq.jpg" alt="Mushtaq Ah Dar" style={{width:'160px',height:'160px',borderRadius:'50%',objectFit:'cover',marginBottom:'18px',boxShadow:'0 2px 8px rgba(53,125,249,0.15)',border:'3px solid #357DF9',background:'#eee'}} />
        <hr style={{margin: '24px 0'}} />
        <div style={{margin:'24px 0', padding:'18px', background:'#f8f9fa', borderRadius:'12px', boxShadow:'0 2px 8px rgba(53,125,249,0.08)'}}>
          <h3 style={{color:'#357DF9', marginBottom:'12px'}}>Inspiration</h3>
          <p style={{fontSize:'1.08rem', color:'#333'}}>
            Computer Science and Engineering (CSE) and Artificial Intelligence (AI) are driving forces behind innovation in today’s world. The journey in CSE and AI is about curiosity, creativity, and solving real-world problems. From building smarter systems to advancing human potential, every step in this field is an opportunity to make a meaningful impact. Stay inspired, keep learning, and shape the future with technology!
          </p>
        </div>
        <p><strong>Contact Person:</strong></p>
        <p>Email: <a href="mailto:mushtaq@kcet.edu.in" style={{color:'#357DF9'}}>mushtaq@kcet.edu.in</a></p>
        <p>Mobile: <a href="tel:7006956025" style={{color:'#357DF9'}}>7006956025</a></p>
        <p>Qualification: <span style={{color:'#FF6B6B'}}>M.Tech/NET/PhD(Pursuing)</span></p>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container">
      <h2 className="section-title">Contact</h2>
      <div className="post-content">
        <p><strong>Contact Person:</strong></p>
        <p>Email: <a href="mailto:mushtaq@kcet.edu.in" style={{color:'#357DF9'}}>mushtaq@kcet.edu.in</a></p>
        <p>Mobile: <a href="tel:7006956025" style={{color:'#357DF9'}}>7006956025</a></p>
        <hr style={{margin: '24px 0'}} />
        <h3 style={{color:'#357DF9', marginBottom:'12px'}}>Feedback</h3>
        <a
          href="mailto:nitsri.mushtaq@gmail.com?subject=Feedback%20for%20Education%20Hub&body=Please%20write%20your%20feedback%20here."
          className="btn-primary"
          style={{display:'block',maxWidth:'400px',margin:'0 auto',marginTop:'12px'}}
        >Send Feedback</a>
      </div>
    </div>
  );
}

function PostsList() {
  return (
    <div className="container">
  <h2 className="section-title">Mushtaq Ah Dar - Trending Posts</h2>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id} className="post-item">
            <Link to={`/posts/${post.id}`} className="post-link">{post.title}</Link>
          </li>
        ))}
      </ul>
      <div style={{textAlign:'center', marginBottom:'24px'}}>
        <a href="https://classroom.google.com/w/Nzc1MDA0MDM2ODg1/t/all" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{display:'inline-block', margin:'12px auto'}}>Google Classroom</a>
      </div>
      <Link to="/" className="btn-secondary">Back to Home</Link>
    </div>
  );
}

function PostView({ postId }) {
  const post = posts.find(p => p.id === Number(postId));
  if (!post) return <div className="container">Post not found. <Link to="/posts" className="btn-secondary">Back to Posts</Link></div>;
  return (
    <div className="container">
      <h2 className="section-title">{post.title}</h2>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      <Link to="/posts" className="btn-secondary">Back to Posts</Link>
    </div>
  );
}

function PostWrapper() {
  const postId = window.location.pathname.split('/').pop();
  return <PostView postId={postId} />;
}

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
      <Link to="/about" className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}>About</Link>
      <Link to="/contact" className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
      <Link to="/posts" className={location.pathname.startsWith('/posts') ? 'nav-link active' : 'nav-link'}>Posts</Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id" element={<PostWrapper />} />
      </Routes>
    </Router>
  );
}
