const GeneralInfo = (props) => {
  const { handleInputChange, giName, giEmail, giPhoneNumber, giCity, giState, mode } = props;

  const editInfo = (
    <div>
      <div className="row">
        <div className="col1">
          <div className="label">Name</div>
          <input
            type="text"
            name="giName"
            placeholder="Enter your name"
            value={giName}
            onChange={handleInputChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
      </div>
      <div className="row">
        <div className="col4">
          <div className="label">Email</div>
          <input
            type="text"
            name="giEmail"
            placeholder="Enter your email"
            value={giEmail}
            onChange={handleInputChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
        <div className="col4">
          <div className="label">Phone</div>
          <input
            type="text"
            name="giPhoneNumber"
            placeholder="Enter your phone number"
            value={giPhoneNumber}
            onChange={handleInputChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
        <div className="col4">
          <div className="label">City</div>
          <input
            type="text"
            name="giCity"
            placeholder="Enter your city"
            value={giCity}
            onChange={handleInputChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
        <div className="col4">
          <div className="label">State</div>
          <input
            type="text"
            name="giState"
            placeholder="Enter your state"
            value={giState}
            onChange={handleInputChange}
            disabled={mode === 'print' ? true : false}
          />
        </div>
      </div>
    </div>
  );

  const printInfo = (
    <div>
      <h1>{giName}</h1>
      <div className="row-line">
        {giEmail} • {giPhoneNumber} • {giCity}, {giState}
      </div>
    </div>
  );

  return <div>{mode === 'edit' ? editInfo : printInfo}</div>;
};

export default GeneralInfo;
