import UserCard from './UserCard';
import SkillList from './SkillList';
import type { User, Skill } from './types';

function App() {
  const user: User = {
    name: "Aiman",
    email: "aimanyerlan@gmail.com",
    age: 24
  };

  const skills: Skill[] = [
    { id: 1, name: "React", level: "Beginner" },
    { id: 2, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "CSS", level: "Expert" }
  ];

  return (
    <>
      <UserCard user={user}>
        <p>Status: Learning React</p>
      </UserCard>

      <SkillList skills={skills} />
    </>
  );
}

export default App;
