import {
    Card,
    CardContent,
    CardHeader,
    CardDescription,
    CardTitle,
  } from "@/components/ui/card"

  import SkillBadge from "../badges/SkillBadge";


interface DegreeCardProps{
    degree: string,
    year: string,
    skills: string[]
}

export default function DegreeCard({degree, year, skills}: DegreeCardProps){
    return (
        <Card>
        <CardHeader>
            <CardTitle>{degree}</CardTitle>
            <CardDescription>{year}</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-flow-col grid-rows-2 gap-2">
            {skills.map((skill, index) => (
              <SkillBadge key={index}  name={skill}/> 
            ))}
            </div>            
        </CardContent>
        </Card>
    )
}