import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ href, children }) {
  const router = useRouter();
  return (
    <div className={router.pathname == `${href}` ? "active" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  );
}
