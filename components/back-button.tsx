import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      className="px-2 py-1 relative text-sm transition-colors text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
      onClick={() => router.back()}
    >
      ← Back
    </button>
  );
}
