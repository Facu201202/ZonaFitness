import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function UserButton() {
    const [menuUSerOpen, setMenuUserOpen] = useState(false);
    return (
        <>
            <div className=" relative">
                <div className=" flex gap-2 items-center">
                    <Image src={"/user.png"} alt="" height={27} width={27} className="rounded-full" />
                    <p className="">Facundo</p>
                    {menuUSerOpen ? (<ChevronUpIcon className="w-4 h-4 hover:cursor-pointer" onClick={() => setMenuUserOpen(!menuUSerOpen)} />) : (
                        <ChevronDownIcon className="w-4 h-4 hover:cursor-pointer" onClick={() => setMenuUserOpen(!menuUSerOpen)} />
                    )}
                </div>
                {menuUSerOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 w-44 bg-white shadow-md flex flex-col items-start p-4 gap-4 z-50 text-[#434346] select-none">
                        <Link href={"/perfil"} className="hover:text-[#275DA2]" onClick={() => setMenuUserOpen(false)}>Mi perfil</Link>
                        <LogoutButton/>
                    </div>
                )}
            </div>
        </>
    )
}
