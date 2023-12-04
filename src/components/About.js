import Memberclass from "./memberclass";
const About = () => {
  return (
    <div className="about">
      <h1>about page</h1>
      <p>This is nothing but a testing of the react router dom</p>
      <Memberclass name={"Kiran"} education={"B.Tech"} />
    </div>
  );
};

export default About;
