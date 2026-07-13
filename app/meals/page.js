import Link from "next/link";

export default function Meals() {
    return (
        <main>
            <h1>Meals</h1>
            <p>  <Link href={"/meals/burger"}>burger</Link></p>
            <p>  <Link href={"/meals/hotdog"}>hotdog</Link></p>
            <p>  <Link href={"/meals/mac"}>mac</Link></p>
        </main>
    )
}