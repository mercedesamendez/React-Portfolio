import AboutMePolaroid from '../assets/AboutMePolaroid.png';

function About() {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-content">
                    <img src={AboutMePolaroid} alt="Profile Image" />
                    <div className="text">
                        <h2>about me</h2>
                        <p>Hi, I’m Mercedes (she/her)! My passion for people and their experiences blossomed while studying Anthropology. In my previous work, I focused on empathizing with and understanding the people around me. My journey into UX design began when I noticed that community members struggled to complete a questionnaire during vaccine outreach, and I discovered that poor design was the culprit. Since then, I’ve been driven to bridge the gap by designing inclusive, intuitive, and ethical products. I love design not only for its creative aspect but for how it can improve the lives of others. I am also in the process of learning some dev tools! When I’m not weaving together design and code to create thoughtful digital experiences, I’m either nurturing native plants or exploring new spots for the perfect latte.
                        </p>
                        <div className="skills">
                            <span>HTML/CSS</span>
                            <span>JavaScript</span>
                            <span>Figma</span>
                            <span>Illustration</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default About;