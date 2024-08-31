import Image from "next/image";

export default function Profile() {
  return (
    <>
      <Image
        src="/jassi.jpg"
        alt="Profile"
        width={50}
        height={50}
        className="rounded-full grayscale"
      />
      <h1 className="text-xl mt-4">Jaswinder Singh</h1>
      <p className="text-gray-500">Software Engineer</p>

      <div className="mt-6 flex gap-6 items-center">
        <Social
          href={"https://twitter.com/jassiD2000"}
          src={"/twitter.svg"}
          alt={"Twitter"}
        />
        <Social
          href={"https://github.com/jassi-singh"}
          src={"/github.svg"}
          alt={"Github"}
        />
        <Social
          href={"https://linkedin.com/jassi-singh"}
          src={"/linkedIn.svg"}
          alt={"LinkedIn"}
        />
        <Social
          href={"mailto:jaswinder.dandyan2000@gmail.com"}
          src={"/email.svg"}
          alt={"Email"}
        />
      </div>
    </>
  );
}

const Social = ({
  href,
  src,
  alt,
}: Readonly<{
  href: string;
  src: string;
  alt: string;
}>) => {
  return (
    <a href={href} target="_blank">
      <Image src={src} alt={alt} width={20} height={20} />
    </a>
  );
};
