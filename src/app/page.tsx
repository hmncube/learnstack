import { getServerSession } from 'next-auth';
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import Landing from 'src/features/landing/page';
import HomePage from './home/page';

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <HomePage profilePic={session?.user?.image || ''} />
    );
  }
  return (
    <Landing />
  );
}