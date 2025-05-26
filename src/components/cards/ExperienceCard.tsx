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
            <div className="grid grid-flow-col grid-rows-2 gap-2">
            {skills.map((skill, index) => (
              <SkillBadge key={index}  name={skill} /> 
            ))}
            </div>            
        </CardContent>
        </Card>

    )
}