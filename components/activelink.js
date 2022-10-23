import Link from "next/link";
import { useRouter } from "next/router";

export default function ActiveLink({ href, children }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={router.pathname == `${href}` ? "active" : ""}>{children}</a>
    </Link>
  );
}
