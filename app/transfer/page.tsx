import {
  SpotifyIconButton,
  YouTubeMusicIconButton,
} from "@/components/ui/icon-buttons";

export default function Transfer() {

  return (
    <section className="w-full flex flex-col items-center justify-center px-2 gap-4 md:px-8 py-44">
      <p className="text-xl font-semibold">Choose the source platform</p>
      <div className="grid grid-cols-2 gap-4">
        <SpotifyIconButton />
        <YouTubeMusicIconButton />
      </div>
    </section>
  );
}
