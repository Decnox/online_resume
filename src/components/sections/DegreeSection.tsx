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
    <section id="degrees" className="w-full mb-24 px-4 max-w-7xl">
        <h2 className="text-4xl font-bold mb-8">Degrees</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {degrees.map((degree, index)=> (
                <DegreeCard
                key={index}
                degree={degree.degree}
                year={degree.year}
                skills={degree.skills}
                />
            ))}
        </div>
    </section>
    )
    
}


