import Image from "next/image";
import TwitterIcon from "@/components/icons/twitter";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linked-in";
import EmailIcon from "@/components/icons/email";

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
      <p className="text-neutral-500 font-mono">Software Engineer</p>

      <div className="mt-6 flex gap-6 items-center">
        <Social
          href={"https://twitter.com/jassiD2000"}
          icon={<TwitterIcon />}
        />
        <Social href={"https://github.com/jassi-singh"} icon={<GithubIcon />} />
        <Social
          href={"https://www.linkedin.com/in/jaswinder-singh-32a01118b/"}
          icon={<LinkedInIcon />}
        />
        <Social
          href={"mailto:jaswinder.dandyan2000@gmail.com"}
          icon={<EmailIcon />}
        />
      </div>
    </>
  );
}

const Social = ({
  href,
  icon,
}: Readonly<{
  href: string;
  icon: React.ReactElement;
}>) => {
  return (
    <a
      href={href}
      className="h-5 w-5 fill-neutral-900 dark:fill-neutral-100"
      target="_blank"
    >
      {icon}
    </a>
  );
};
