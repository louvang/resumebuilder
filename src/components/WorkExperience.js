const WorkExperience = (props) => {
  const {
    workExp,
    handleAddWorkClick,
    handleDeleteWorkClick,
    handleWorkInputChange,
    handleAddResponsibilityClick,
    handleDeleteResponsibilityClick,
    mode,
  } = props;

  let workExpFormList = '';
  let workExpPrintList = '';
  if (workExp.length > 0) {
    workExpFormList = workExp.map((workObj) => (
      <div key={workObj.id} id={workObj.id}>
        <div className="row">
          <div className="col3">
            <div className="label">Company</div>
            <input
              placeholder="Enter your company"
              name="company"
              value={workObj.company}
              onChange={handleWorkInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">Start Date</div>
            <input
              placeholder="(eg. June 2020)"
              name="startDate"
              value={workObj.startDate}
              onChange={handleWorkInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">End Date</div>
            <input
              placeholder="(eg. June 2021 or Present)"
              name="endDate"
              value={workObj.endDate}
              onChange={handleWorkInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
        </div>

        <div className="row">
          <div className="col3">
            <div className="label">Job Title</div>
            <input
              placeholder="Enter your job title"
              name="jobTitle"
              value={workObj.jobTitle}
              onChange={handleWorkInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">City</div>
            <input
              placeholder="Enter city"
              name="city"
              value={workObj.city}
              onChange={handleWorkInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">State</div>
            <input
              placeholder="Enter state"
              name="state"
              value={workObj.state}
              onChange={handleWorkInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
        </div>

        <div className="row">
          <div className="col1 responsibilities">
            <div className="label">Core Responsibilities</div>
            {workObj.responsibilities.map((item, index) => {
              return (
                <div key={`${workObj.id}-row${index}`}>
                  <button
                    className="sub-delete"
                    id={`${workObj.id}-delRes${index}`}
                    onClick={handleDeleteResponsibilityClick}
                  >
                    ✕
                  </button>
                  <input
                    id={`${workObj.id}-res${index}`}
                    placeholder="Enter core responsibility"
                    name="responsibility"
                    value={item}
                    onChange={handleWorkInputChange}
                    disabled={mode === 'print' ? true : false}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="row btn-row">
          <button onClick={handleAddResponsibilityClick}>↳ Add responsibility</button>
          <button onClick={handleDeleteWorkClick} className="delete-section">
            - Delete This Work Experience
          </button>
        </div>
      </div>
    ));

    workExpPrintList = workExp.map((workObj) => (
      <div key={`p${workObj.id}`}>
        <div className="row bold">
          <div>{workObj.company}</div>
          <div>
            {workObj.startDate} - {workObj.endDate}
          </div>
        </div>

        <div className="row">
          <div className="italic">{workObj.jobTitle}</div>
          <div>
            {workObj.city}, {workObj.state}
          </div>
        </div>

        <div className="row">
          <ul>
            {workObj.responsibilities.map((item, index) => {
              return <li key={`${workObj.id}-list${index}`}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    ));
  }

  const editWork = (
    <div>
      <div>{workExpFormList}</div>
      <button className="full-width" onClick={handleAddWorkClick}>
        + Add {workExp.length > 0 ? 'More' : ''} Work Experience
      </button>
    </div>
  );

  const printWork = <div>{workExpPrintList}</div>;

  return (
    <div>
      <h2>Work Experience</h2>
      {mode === 'edit' ? editWork : printWork}
    </div>
  );
};

export default WorkExperience;
