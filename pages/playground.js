const pageTitle = 'Playground';

export const About = () => {
  return (
    <div>
      <h1>{pageTitle}</h1>

      <p>Hello.</p>
      <style jsx>{`
        * {
          line-height: 1.5;
        }
        code {
          background-color: rgba(27, 31, 35, 0.05);
          border-radius: 3px;
          color: #b838f0;
          font-size: 85%;
          margin: 0;
          padding: 0.2em 0.4em;
        }
      `}</style>
    </div>
  );
};

export default About;
