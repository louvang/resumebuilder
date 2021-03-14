const Skills = (props) => {
  const { skills, interests, handleTextareaChange, mode } = props;
  const editSkills = (
    <div>
      <h2>Skills &amp; Interests</h2>
      <div className="row">
        <div className="col1">
          <div className="label">Skills</div>
          <textarea
            placeholder="Enter your skills"
            name="skills"
            value={skills}
            onChange={handleTextareaChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
      </div>

      <div className="row">
        <div className="col1">
          <div className="label">Interests</div>
          <textarea
            placeholder="Enter your interests"
            name="interests"
            value={interests}
            onChange={handleTextareaChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
      </div>
    </div>
  );

  const printSkills = (
    <div>
      <h2>Skills &amp; Interests</h2>
      <div className="row">
        <div className="col1">
          <ul>
            <li>
              <span className="bold">Skills:</span> {skills}
            </li>
            <li>
              <span className="bold">Interests:</span> {interests}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return <div>{mode === 'edit' ? editSkills : printSkills}</div>;
};

export default Skills;
