import ProfileCard from './components/ProfileCard'
import './App.css'


export default function App() {
  return (
    <main className="stage">
      <ProfileCard
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
