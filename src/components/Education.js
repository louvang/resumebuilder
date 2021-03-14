const Education = (props) => {
  const {
    education,
    handleAddEduClick,
    handleDeleteEduClick,
    handleEduInputChange,
    handleAddExtrasClick,
    handleDeleteExtrasClick,
    mode,
  } = props;

  let eduFormList = '';
  let eduPrintList = '';
  if (education.length > 0) {
    eduFormList = education.map((eduObj) => (
      <div key={eduObj.id} id={eduObj.id}>
        <div className="row">
          <div className="col3">
            <div className="label">College Name</div>
            <input
              placeholder="Enter the college you attended"
              name="college"
              value={eduObj.college}
              onChange={handleEduInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">Start Date</div>
            <input
              placeholder="eg. September 2008"
              name="startDate"
              value={eduObj.startDate}
              onChange={handleEduInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">End Date</div>
            <input
              placeholder="eg. May 2012"
              name="endDate"
              value={eduObj.endDate}
              onChange={handleEduInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
        </div>

        <div className="row">
          <div className="col3">
            <div className="label">Degree(s) &amp; Major(s)</div>
            <input
              placeholder="eg. BFA in Graphic Design"
              name="degrees"
              value={eduObj.degrees}
              onChange={handleEduInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">City</div>
            <input
              placeholder="Enter city of school"
              name="city"
              value={eduObj.city}
              onChange={handleEduInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
          <div className="col3">
            <div className="label">State</div>
            <input
              placeholder="Enter state of school"
              name="state"
              value={eduObj.state}
              onChange={handleEduInputChange}
              disabled={mode === 'print' ? true : false}
            />
          </div>
        </div>

        <div className="row">
          <div className="col1 extras">
            <div className="label">Additional Information</div>

            {eduObj.extras.map((item, index) => {
              return (
                <div key={`${eduObj.id}-ext${index}`}>
                  <button id={`${eduObj.id}-delExtra${index}`} onClick={handleDeleteExtrasClick}>
                    ✕
                  </button>
                  <input
                    id={`${eduObj.id}-extra${index}`}
                    placeholder="eg. Honors programs, study abroad, extra-curricular activities"
                    name="extras"
                    value={item}
                    onChange={handleEduInputChange}
                    disabled={mode === 'print' ? true : false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="row btn-row">
          <button onClick={handleAddExtrasClick}>↳ Add More</button>

          <button onClick={handleDeleteEduClick} className="delete-section">
            - Delete This Education
          </button>
        </div>
      </div>
    ));

    eduPrintList = education.map((eduObj) => (
      <div key={`p${eduObj.id}`}>
        <div className="row bold">
          <div>{eduObj.college}</div>
          <div>
            {eduObj.startDate} - {eduObj.endDate}
          </div>
        </div>

        <div className="row">
          <div className="italic">{eduObj.degrees}</div>
          <div>
            {eduObj.city}, {eduObj.state}
          </div>
        </div>

        <div className="row">
          <ul>
            {eduObj.extras.map((item, index) => {
              return <li key={`${eduObj.id}-list${index}`}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    ));
  }

  const editEdu = (
    <div>
      <div>{eduFormList}</div>
      <button className="full-width" onClick={handleAddEduClick}>
        + Add {education.length > 0 ? 'More' : ''} Education
      </button>
    </div>
  );

  const printEdu = <div>{eduPrintList}</div>;

  return (
    <div>
      <h2>Education</h2>
      {mode === 'edit' ? editEdu : printEdu}
    </div>
  );
};

export default Education;
