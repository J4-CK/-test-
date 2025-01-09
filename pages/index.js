import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // Fetch session on load
  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch('/api/auth/session');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // Set user data
        } else {
          console.error("Session validation failed:", await res.json());
          router.push('/login'); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Error checking session:", error);
        router.push('/login'); // Redirect on error
      }
    }
    checkSession();
  }, [router]);

  // Handle logout
  async function handleLogout() {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        router.push('/login'); // Redirect to login after logout
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  if (!user) {
    return (
      <div>
        <link rel="stylesheet" href="/styles/homepagestyle.css" />
        <header>
          <h1><a href="/">Hacker's Path</a></h1>
        </header>
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <link rel="stylesheet" href="/styles/homepagestyle.css" />
      <header>
        <h1><a href="/">Hacker's Path</a></h1>
      </header>

      {/* Roadmap Section */}
      <div className="roadmap">
        <a href="/leaderboard">Leaderboard</a>
        <a href="/lessons">Lessons</a>
        <a href="/quizzes">Quizzes</a>
        <a href="/profile">Profile</a>
      </div>

      {/* Main Content Container */}
      <div className="container">
        {/* Player Stats Section */}
        <div className="stats">
          <div className="box">
            <h3>Daily Points</h3>
            <p>0</p>
          </div>
          <div className="box">
            <h3>All-Time Points</h3>
            <p>0</p>
          </div>
        </div>

        {/* Lessons Section */}
        <div className="section">
          <h2>Lessons</h2>
          <div className="buttons">
            <a href="/xss-presentation">XSS Presentation</a>
            <a href="/cybersecurity-presentation">What is Cybersecurity?</a>
            <a href="lessons/strong-passwords-presentation">Strong Passwords</a>
          </div>
        </div>

        {/* Quizzes Section */}
        <div className="section">
          <h2>Quizzes</h2>
          <div className="buttons">
            <a href="/xss-quiz">XSS Quiz</a>
            <a href="/cybersecurity-quiz">What is Cybersecurity? Quiz</a>
            <a href="/strong-passwords-quiz">Strong Passwords Quiz</a>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </div>
    </div>
  );
}
