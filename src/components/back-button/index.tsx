import Link from "next/link";

const BackButton = () => {
  return (
    <Link href="/" className="back-to-home-btn inline-block">
      🌱 Back to roots
    </Link>
  );
};

export default BackButton;
