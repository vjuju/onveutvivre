import { liens } from '@/content/site';

export default function Accueil() {
  return (
    <iframe
      src={liens.notion}
      title="On veut vivre"
      className="block h-[calc(100vh-4.5rem)] min-h-[600px] w-full border-0"
      allowFullScreen
    />
  );
}
