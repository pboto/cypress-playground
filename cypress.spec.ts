// PROBLEM #1 - Please write a function that will check the Visibility (Assert) of all elements (titles) presented on the page from an Array - taskViews: [...]
const views = {
  bodySelector: {
    addViewList: '[data-test=data-view]'
  },
    taskViews: [
    'List',
    'Board',
    'Calendar',
    'Map',
    'Activity',
    'Box',
    'Gantt'
  ],
};

// HINT: ​loop through an array by using the forEach method
const checkAllTitlesTasksViews = () => {
 
};



// PROBLEM #2 - For the most popular command in the Cypress: Clicking Elements with the Contains of String - please create a Custom Command for reuse in the project
cy.get('[data-test=...]').contains('string').click();


Cypress.Commands.add(
  'clickElementContains'

);
