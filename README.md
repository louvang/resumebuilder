# [Resume Builder](https://louvang.github.io/resumebuilder/)

[Resume Builder](https://louvang.github.io/resumebuilder/) allows users to create a resume by inputting information through form elements. When the user selects "Print Mode", they can preview how their resume will look and choose to print it off from there. By default, the form is pre-filled but the user can select "Clear" to clear all form fields and fill in the information themselves.

<p align="center"><a href="https://louvang.github.io/resumebuilder/" target="_blank"><img src="https://raw.githubusercontent.com/louvang/resumebuilder/master/preview.gif" alt="Resume Builder" width="750px" /></a></p>

## About Code

This web application was created using [React](https://reactjs.org/). It modifies state, allowing the user to view an "edit mode" and a "preview mode" in the same page. The app is deployed using GitHub pages. All state is handled in `App.js` with various resume sections divided into their own files in the `/components` directory.

When the user selects print mode, they can then choose to print from the browser directly (File > Print or Ctrl + P). The CSS has been modified so that the printer only prints the relevant information.

## Further Improvements

- [ ] Have user input be saved to their browser's localStorage.
- [ ] Add slide-in banner that indicates that form inputs are not collected.
