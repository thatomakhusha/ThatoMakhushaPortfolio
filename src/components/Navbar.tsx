import Link from "next/link";

const navLinks = [
    {href: "/#projects", label: "projects"},
    {href: "/#skills", label: "skills"},
    {href: "/#experience", label: "experience"},
    {href: "/#contact", label: "contact"},
]

export default function Navbar(){

    return (
        <nav className="sticky top-0 z-50 border-b border-border mx-auto px-6 md:px-7 lg:px-9">
            <div className="flex items-center justify-between h-20">
                <Link href="/" className="text-accent text-[14.5px] font-mono">
                    TM.dev
                </Link>
                <div className="flex gap-5">
                    <div className="flex gap-10">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                className="text-[15px] text-muted font-mono hover:text-accent"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <div>
                        <Link href="/" className="text-accent border border-accent px-3 py-2 hover:bg-accent hover:text-bg rounded-lg">
                            download_cv.pdf
                        </Link>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}