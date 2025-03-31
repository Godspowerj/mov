// app/page.js
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/dashboard');
  // This component won't render since redirect will be triggered
  return null;
}