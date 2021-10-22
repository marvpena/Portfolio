import * as React from "react";
import Layout from "../components/layouts";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/cardbox";
import TagButton from "../components/tagButton";
import "../styles/layout.scss";
import { Link } from "gatsby";

const toolsData = ["HTML/CSS", "Javascript", "React", "React Native"];

// markup
const IndexPage = () => {
  function tools(data) {
    for (let i = 0; i < data.length; i++) {
      return <TagButton label={data[i]} />;
    }
  }

  console.log(tools(toolsData));
  return (
    <div>
      <Navbar />
      <Layout>
        <div className="header-section">
          <div>
            <h1>
              I'm Marv, a developer with an eye for{" "}
              <span style={{ color: "grey", textDecoration: "underline" }}>
                design
              </span>
              , consectetur adipiscing elit, sed do eiusmod tempor. I believe
              simple and functional can also be beautiful.
            </h1>
          </div>
          <div>Arrow down here</div>
        </div>
        <div className="section">
          <div>{/* <div className='line'/> */}</div>
          <div>
            <div className="grid-container">
              {/* <p>Projects:</p> */}
              <Card>
                <Link
                  to={"/projects"}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#efefef",
                    padding: 20,
                  }}
                >
                  Adsense
                </Link>
              </Card>
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container-row">
            <div className="box-left">
              <h4>Toolchain</h4>
              <div>
                <p>HTML/CSS</p>
                <p>Javascript</p>
                <p>React</p>
                <p>React Native</p>
                <p>Invision</p>
                <p>Adobe xd</p>
                <p>Adobe photoshop</p>
                <p>Firebase</p>
                <p>css in js</p>
                <p>Gatsby</p>
                <p>Storybooks</p>
                <p>Rollup</p>
                <p>Jest</p>
                {/* split these into categories,
                  .testing
                  .design
                  .Backend and database
                  .styling
                  .prototyping
                  .building
                  .package bundler
                */}
              </div>
            </div>
            <div></div>
            <div className="box-right">
              <h4>About</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </Layout>
      <Footer email="marvadepena@outlook.com" />
    </div>
  );
};

export default IndexPage;
