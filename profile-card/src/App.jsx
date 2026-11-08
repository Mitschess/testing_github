import ProfileCard from './components/ProfileCard'
import './App.css'
import profilePhoto from './assets/profile.jpg'


export default function App() {
  return (
    <main className="stage">
      <ProfileCard
        avatarUrl={profilePhoto}
        name="Tsamara Rhea"
        title="Web Developer"
        handle="mitschess"
        status="Online"
        contactText="Contact"
        onContactClick={() => alert('Contact clicked!')}
      />
    </main>
  )
}
