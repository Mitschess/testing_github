import ProfileCard from './components/ProfileCard'
import './App.css'
import avatar from './assets/profile.jpg'


export default function App() {
  return (
    <main className="stage">
      <ProfileCard
        name="Taqiyuddin Haq"
        title="Web Developer"
        handle="mitschess"
        status="Online"
        contactText="Contact"
        avatarUrl={avatar}
        miniAvatarUrl={avatar}
        onContactClick={() => alert('Contact clicked!')}
      />
    </main>
  )
}
