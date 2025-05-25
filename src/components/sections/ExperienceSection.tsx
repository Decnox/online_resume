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
    return (
        <section id="experiences" className="w-full mb-24 px-4 max-w-7xl">
          <h2 className="text-4xl font-bold mb-8">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
                <ExperienceCard
                key={index}
                company={experience.company}
                date={experience.date}
                skills={experience.skills}
                />
            ))}
          </div>
        </section>
      );
}