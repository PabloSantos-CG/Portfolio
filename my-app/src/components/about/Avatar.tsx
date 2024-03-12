import Image from "next/image";

export default function Avatar() {
  return (
    <div className="">
      <Image
        src="/profile.png"
        alt="Avatar"
        width={320}
        height={320}
        className="rounded-full border-4 border-white"
      />
    </div>
  );
}
