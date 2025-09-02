import { useState } from "react";
import FareWellCard from '../assets/FareWellCard.png';
import ExtremeCycleCard from '../assets/ExtremeCycleCard.png';
import A11YCard from '../assets/A11YCard.png';
import ANewCard from '../assets/ANewCard.png';
import BookstoreAppCard from '../assets/BookstoreAppCard.png';
import WeatherAppCard from '../assets/WeatherAppCard.png';


const allProjects = [
    {
        id: 1,
        title: "Travel and Wellness Website - UX/UI Design",
        category: "design",
        image: FareWellCard,
    },
    {
        id: 2,
        title: "Cycling E-Commerce Website - UI Design",
        category: "design",
        image: ExtremeCycleCard,
    },
    {
        id: 3,
        title: "Accessibility Course - LXD",
        category: "design",
        image: A11YCard,
    },
    {
        id: 4,
        title: "Company Video - Ideation and Illustration",
        category: "design",
        image: ANewCard,
    },
    {
        id: 5,
        title: "Full-stack Online Cycling Shop with MongoDB, Express, React",
        category: "dev",
        image: ExtremeCycleCard,
    },
    {
        id: 6,
        title: "Bookstore App - API and Javascript",
        category: "dev",
        image: BookstoreAppCard,
    },
    {
        id: 7,
        title: "Weather App - Weather API and React",
        category: "dev",
        image: WeatherAppCard,
    },
];

function Projects() {
    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all"
            ? allProjects
            : allProjects.filter((project) => project.category === filter);

    return (
        <section id="work" className="work">
            <div className="container">
                <h2>work</h2>

                <div className="button-nav" style={{ marginBottom: "1.5rem" }}>
                    <button className={`button-work ${filter === "all" ? "active": ""}`} onClick={() => setFilter("all")}>all</button>
                    <button className={`button-work ${filter === "design" ? "active": ""}`}  onClick={() => setFilter("design")}>design</button>
                    <button className={`button-work ${filter === "dev" ? "active": ""}`}  onClick={() => setFilter("dev")}>dev</button>
                </div>

                <div className="work-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="work-card">
                            <img src={project.image} alt={project.title} />
                            <h4>{project.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Projects;