import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTiktokLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="/"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookBoxLine />
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiTiktokLine />
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="/"
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default Socials;
