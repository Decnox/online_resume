import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
    name: string
}

export default function SkillBadge({name}: SkillBadgeProps) {
    return (
        <>
            <Badge variant="secondary">{name}</Badge>
        </>
    )
}