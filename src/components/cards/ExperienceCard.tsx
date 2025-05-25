import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"

import SkillBadge from "../badges/SkillBadge";

interface ExperienceCardProps {
    company: string;
    date: string
    skills: string[]
}


export default function ExperienceCard({company, date, skills}: ExperienceCardProps) {
    return (
        <Card>
        <CardHeader>
            <CardTitle>{company}</CardTitle>
            <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent>
            {skills.map((skill, index) => (
              <SkillBadge key={index}  name={skill} /> 
            ))}
        </CardContent>
        </Card>
    )
}