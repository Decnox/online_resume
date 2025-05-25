import DegreeCard from "../cards/DegreeCard"

export default function DegreeSection() {
    
    const degrees = [
        {
            "degree":"Master 2 Arts et Technologies de l'Image",
            "year": "2024",
            "skills":["Python", "Github", "Taiga","Teamwork"],
        },
        {
            "degree":"Licence web Concepteur de Systèmes d'Informations développeur agile",
            "year": "2021",
            "skills":["4D", "Teamwork", "Programming"],
        },
        {
            "degree":"Diplôme Universitaire et Technologique en Informatique",
            "year": "2020",
            "skills":["4D", "Teamwork", "Programming"],
        },
    ]
    
    return (
    <>
        <h1>Degrees</h1>

        {degrees.map((degree, index)=> (
            <DegreeCard
            key={index}
            degree={degree.degree}
            year={degree.year}
            skills={degree.skills}
            />
        ))}
    </>
    )
    
}


