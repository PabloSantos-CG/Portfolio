import Image from "next/image";

export default function Avatar() {
  return (
    <div className="hidden md:flex justify-end flex-1">
      <Image
        src="/profile.webp"
        alt="Avatar"
        width={320}
        height={320}
        quality={70}
        className="rounded-full border-4 border-white"
      />
    </div>
  );
}
