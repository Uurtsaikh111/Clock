import { useRouter } from "next/router";

export function Header() {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-around p-[30px] w-[500px] bg-slate-600 m-auto text-white">
        <button onClick={()=>router.push("/Clocker")}>Clock</button>
        <button onClick={()=>router.push("/Stopwatch")}>Stopwatch</button>
        <button onClick={()=>router.push("/Timer")}>Timer</button>
      </div>
    </div>
  );
}
