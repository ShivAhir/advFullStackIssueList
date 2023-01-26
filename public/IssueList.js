function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to IssueFilter"));
}
function IssueAdd() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to IssueAdd"));
}
function IssueRow(props) {
  // if we use props as the arguement of issueRow and not {issue} we use props.issue.(particular property of issue that is passed)
  return /*#__PURE__*/React.createElement("tr", {
    style: props.style
  }, /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Id), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Owner), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Status), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Created), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Effort), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Due), /*#__PURE__*/React.createElement("td", {
    style: props.style
  }, props.issue.Info));
}
function IssueTable() {
  const style = {
    border: "2px solid"
  };
  const issueList = [{
    Id: 1,
    Owner: "Person-A",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 4,
    Due: "2023-01-30",
    Info: "This is the info"
  }, {
    Id: 2,
    Owner: "Person-B",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 8,
    Due: "2023-02-15",
    Info: "This is the info for task B"
  }];

  // here we used hooks to maintain the state
  // react.usestate is a hook
  const [allIssues, setAllIssues] = React.useState([]);
  const allIssueRow = allIssues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    issue: issue,
    style: style
  }));
  // this is a function to set the issues using the hook's function setAllIssues
  setTimeout(() => {
    setAllIssues(issueList);
  }, 2000);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Efforts"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, allIssueRow)));
}
const IssueList = () => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, null));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(IssueList, null));