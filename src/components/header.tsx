import {spaceMono} from "@/components/fonts";

export default function Header() {
    return (
        <header>
            <div style={{padding: '2px'}}>
                <h1 className={`${spaceMono.className}`}>Michael Crinite</h1>
            </div>
        </header>
    )
}