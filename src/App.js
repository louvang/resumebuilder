import React, { Component } from 'react';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'edit',
      giName: 'Dwight K. Schrute',
      giEmail: 'dwightschrute@yahoo.com',
      giPhoneNumber: '(123) 456-7890',
      giCity: 'Scranton',
      giState: 'PA',
      workExp: [
        {
          id: uniqid(),
          company: 'Dunder Mifflin',
          startDate: 'July 2001',
          endDate: 'Present',
          jobTitle: 'Assistant Regional Manager',
          city: 'Scranton',
          state: 'PA',
          responsibilities: [
            "Regional manager's right hand, reporting on employee conduct/productivity",
            'Vanquished customer resistance through merciless jackhammer-like techniques',
            'Closed more sales with more U.S. dollars than any other employee',
            'Beat the machine sales robot on its 1st day',
          ],
        },
        {
          id: uniqid(),
          company: 'Schrute Farms',
          startDate: 'January 1977',
          endDate: 'Present',
          jobTitle: 'Beet Farm / Owner / General Manager',
          city: 'Honesdale',
          state: 'PA',
          responsibilities: [
            'Operate and maintain 9-bedroom/1-bathroom agrotourism bed and breakfast',
            'Increased profits by adding event services for weddings and corporate garden parties',
            'Controller of excellently rated TripAdvisor social media',
          ],
        },
      ],
      education: [
        {
          id: uniqid(),
          college: 'The University of Scranton',
          startDate: 'September 1988',
          endDate: 'May 1992',
          degrees: 'BS in Business Administration',
          city: 'Scranton',
          state: 'PA',
          extras: ['GPA 2.9978 / 4'],
        },
      ],
      skills:
        'Pre-industrial German, religious German, Goju Ryu Karate (Purple Belt), contract negotiation, PC, fax machine, twin embolisation, beet-related agrotourism, notary public, mentor of underlings, Salesman of the Month 2004 (3-time winner), Salesman of the Year 2005',
      interests: 'Table tennis, paintball, laser tag, crossbow hunting',
    };
  }

  handleEditModeClick = (e) => {
    this.setState({
      mode: 'edit',
    });
  };

  handlePrintModeClick = (e) => {
    this.setState({
      mode: 'print',
    });
  };

  handleAddWorkClick = (e) => {
    const workObj = {
      id: uniqid(),
      company: '',
      startDate: '',
      endDate: '',
      jobTitle: '',
      city: '',
      state: '',
      responsibilities: [''],
    };
    this.setState({
      workExp: this.state.workExp.concat(workObj),
    });
  };

  handleAddEduClick = (e) => {
    const eduObj = {
      id: uniqid(),
      college: '',
      startDate: '',
      endDate: '',
      degrees: '',
      city: '',
      state: '',
      extras: [''],
    };
    this.setState({
      education: this.state.education.concat(eduObj),
    });
  };

  handleClearClick = (e) => {
    this.setState({
      mode: 'edit',
      giName: '',
      giEmail: '',
      giPhoneNumber: '',
      giCity: '',
      giState: '',
      workExp: [],
      education: [],
      skills: '',
      interests: '',
    });
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleWorkInputChange = (e) => {
    const targetId = e.target.id;
    const regex = /-(res)\d/;
    const id = e.target.parentNode.parentNode.parentNode.id;
    const name = e.target.name;
    const value = e.target.value;
    const updatedWorkExp = this.state.workExp.slice();
    const index = updatedWorkExp.findIndex((workObj) => workObj.id === id);

    if (regex.test(targetId)) {
      const resIndex = parseInt(targetId[targetId.length - 1]);
      const resParentId = e.target.parentNode.parentNode.parentNode.parentNode.id;
      const workIndex = updatedWorkExp.findIndex((workObj) => workObj.id === resParentId);
      updatedWorkExp[workIndex].responsibilities[resIndex] = value;
    } else {
      updatedWorkExp[index][name] = value;
    }

    this.setState({
      workExp: updatedWorkExp,
    });
  };

  handleEduInputChange = (e) => {
    const targetId = e.target.id;
    const extraRegex = /-(extra)\d/;
    const id = e.target.parentNode.parentNode.parentNode.id;
    const name = e.target.name;
    const value = e.target.value;
    const updatedEdu = this.state.education.slice();
    const index = updatedEdu.findIndex((eduObj) => eduObj.id === id);

    if (extraRegex.test(targetId)) {
      const index = parseInt(targetId[targetId.length - 1]);
      const subParentId = e.target.parentNode.parentNode.parentNode.parentNode.id;
      const eduIndex = updatedEdu.findIndex((eduObj) => eduObj.id === subParentId);
      updatedEdu[eduIndex].extras[index] = value;
    } else {
      updatedEdu[index][name] = value;
    }

    this.setState({
      education: updatedEdu,
    });
  };

  handleDeleteWorkClick = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const updatedWorkExp = this.state.workExp.filter((workObj) => workObj.id !== id);
    this.setState({
      workExp: updatedWorkExp,
    });
  };

  handleDeleteEduClick = (e) => {
    const id = e.target.parentNode.parentNode.id;
    const updatedEdu = this.state.education.filter((eduObj) => eduObj.id !== id);
    this.setState({
      education: updatedEdu,
    });
  };

  handleAddResponsibilityClick = (e) => {
    const updatedWorkExp = this.state.workExp.slice();
    const id = e.target.parentNode.parentNode.id;
    const index = updatedWorkExp.findIndex((workObj) => workObj.id === id);
    updatedWorkExp[index].responsibilities.push('');
    this.setState({
      workExp: updatedWorkExp,
    });
  };

  handleDeleteResponsibilityClick = (e) => {
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
    const resIndex = parseInt(e.target.id[e.target.id.length - 1]);
    const updatedWorkExp = this.state.workExp;
    const workIndex = updatedWorkExp.findIndex((workObj) => workObj.id === id);
    updatedWorkExp[workIndex].responsibilities.splice(resIndex, 1);

    this.setState({
      workExp: updatedWorkExp,
    });
  };

  handleAddExtrasClick = (e) => {
    const updatedEducation = this.state.education.slice();
    const id = e.target.parentNode.parentNode.id;
    const index = updatedEducation.findIndex((extrasObj) => extrasObj.id === id);
    updatedEducation[index].extras.push('');
    this.setState({
      education: updatedEducation,
    });
  };

  handleDeleteExtrasClick = (e) => {
    const id = e.target.parentNode.parentNode.parentNode.parentNode.id;
    const extIndex = parseInt(e.target.id[e.target.id.length - 1]);
    const updatedEducation = this.state.education;
    const eduIndex = updatedEducation.findIndex((extrasObj) => extrasObj.id === id);
    updatedEducation[eduIndex].extras.splice(extIndex, 1);

    this.setState({
      education: updatedEducation,
    });
  };

  handleTextareaChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { giName, giEmail, giPhoneNumber, giCity, giState, mode } = this.state;

    const clearBtn = (
      <button className="btn-right" onClick={this.handleClearClick}>
        Clear
      </button>
    );

    return (
      <div className="App" id={this.state.mode === 'edit' ? 'edit-mode' : 'print-mode'}>
        <header>
          <div className="col2">
            <button className={this.state.mode === 'edit' ? 'active' : 'mode'} onClick={this.handleEditModeClick}>
              Edit Mode
            </button>
            <button className={this.state.mode === 'print' ? 'active' : 'mode'} onClick={this.handlePrintModeClick}>
              Print Mode
            </button>
          </div>
          <div className="col2 right">{mode === 'edit' ? clearBtn : ''}</div>
        </header>

        <div className="container">
          <GeneralInfo
            handleInputChange={this.handleInputChange}
            giName={giName}
            giEmail={giEmail}
            giPhoneNumber={giPhoneNumber}
            giCity={giCity}
            giState={giState}
            mode={mode}
          />
          <WorkExperience
            workExp={this.state.workExp}
            handleAddWorkClick={this.handleAddWorkClick}
            handleDeleteWorkClick={this.handleDeleteWorkClick}
            handleWorkInputChange={this.handleWorkInputChange}
            handleAddResponsibilityClick={this.handleAddResponsibilityClick}
            handleDeleteResponsibilityClick={this.handleDeleteResponsibilityClick}
            mode={mode}
          />
          <Education
            education={this.state.education}
            handleAddEduClick={this.handleAddEduClick}
            handleDeleteEduClick={this.handleDeleteEduClick}
            handleEduInputChange={this.handleEduInputChange}
            handleAddExtrasClick={this.handleAddExtrasClick}
            handleDeleteExtrasClick={this.handleDeleteExtrasClick}
            mode={mode}
          />
          <Skills
            skills={this.state.skills}
            interests={this.state.interests}
            handleTextareaChange={this.handleTextareaChange}
            mode={mode}
          />
        </div>
      </div>
    );
  }
}

export default App;
