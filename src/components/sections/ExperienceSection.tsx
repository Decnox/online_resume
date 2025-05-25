import ExperienceCard from "@/components/cards/ExperienceCard"


export default function ExperienceSection() {
    
    const experiences = [
        {
            "company":"Normaal",
            "date": "May 2023 to September 2024",
            "skills":["Python", "Github", "Taiga","Teamwork"],
        },
        {
            "company":"Vulcanic",
            "date": "June 2020 to september 2020",
            "skills":["4D", "Teamwork", "Programming"],
        }
    ]
    return(
        <>
        <h1> Experience Section </h1>
        {experiences.map((experience, index) => (
            <ExperienceCard
            key={index}
            company={experience.company}
            date={experience.date}
            skills={experience.skills}
            />
        ))}
      </>
    )
}