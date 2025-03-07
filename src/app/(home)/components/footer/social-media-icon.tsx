import Link from "next/link";

import { Button } from "../../../../components/ui/button";
import { SimpleIcon } from "simple-icons";

interface SocialMediaIconProps {
    icon: SimpleIcon,
    link: string
}

export function SocialMediaIcon({ icon, link }: SocialMediaIconProps) {
    return (
        <Button size="icon" className="w-12 h-12 rounded-full" asChild>
            <Link href={link} target="_blank">
                <div className="invert z-20 w-6 h-6" dangerouslySetInnerHTML={{ __html: `
                    ${icon.svg}
                    `}} />
            </Link>
        </Button>
    )
}