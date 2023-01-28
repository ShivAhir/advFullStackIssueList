function IssueFilter() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to IssueFilter"));
}
function IssueAdd({
  AddSingleIssue
}) {
  const handleSubmit = e => {
    e.preventDefault();
    let form = document.forms.addIssue;
    let singleIssue = {
      Owner: form.owner.value,
      Status: form.status.value,
      Created: new Date().toUTCString(),
      Effort: parseInt(form.effort.value),
      Due: new (Date() + parseInt(form.effort.value)).toUTCString(),
      Title: form.title.value
    };
    console.log(singleIssue);
    AddSingleIssue(singleIssue);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to IssueAdd"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("form", {
    name: "addIssue",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    for: "owner"
  }, "Owner"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "owner",
    name: "owner"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "status"
  }, "Status"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "status",
    name: "status"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "effort"
  }, "Effort"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "number",
    id: "effort",
    name: "effort"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    for: "title"
  }, "Title"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "title",
    name: "title"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit"), /*#__PURE__*/React.createElement("br", null)));
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
  }, props.issue.Title));
}
function IssueTable({
  allIssues
}) {
  const style = {
    border: "2px solid"
  };
  // const issueList = [
  //   {
  //     Id: 1,
  //     Owner: "Person-A",
  //     Status: "Assigned",
  //     Created: "2023-01-20",
  //     Effort: 4,
  //     Due: "2023-01-30",
  //     Info: "This is the info",
  //   },
  //   {
  //     Id: 2,
  //     Owner: "Person-B",
  //     Status: "Assigned",
  //     Created: "2023-01-20",
  //     Effort: 8,
  //     Due: "2023-02-15",
  //     Info: "This is the info for task B",
  //   },
  // ];
  // const singleIssue = {
  //   Id: 3,
  //   Owner: "Person-C",
  //   Status: "Assigned",
  //   Created: "2023-01-20",
  //   Effort: 5,
  //   Due: "2023-02-15",
  //   Info: "This is the info for task C",
  // };

  // here we used hooks to maintain the state
  // react.usestate is a hook
  // const [allIssues, setAllIssues] = React.useState([]);

  // this is a function to set the issues using the hook's function setAllIssues
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setAllIssues(issueList);
  //   }, 2000);
  // }, []); // this use effect sets the initial issueList
  // React.useEffect(() => {
  //   addSingleIssue();
  //   console.log("hello " + counter);
  // }, [counter]); // this adds the issue on btnClick

  // function to add that single issue list on button click
  // const addSingleIssue = () => {
  //   let issues = allIssues.slice();
  //   issues.push(singleIssue);
  //   setAllIssues(issues);
  // };
  const allIssueRow = allIssues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    issue: issue,
    style: style
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Welcome to IssueTable"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Efforts"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Title"))), /*#__PURE__*/React.createElement("tbody", null, allIssueRow)));
}
const IssueList = () => {
  const issueList = [{
    Id: 1,
    Owner: "Person-A",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 4,
    Due: "2023-01-30",
    Title: "This is the info for task A"
  }, {
    Id: 2,
    Owner: "Person-B",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 8,
    Due: "2023-02-15",
    Title: "This is the info for task B"
  }];
  const [allIssues, setAllIssues] = React.useState([]);
  const addSingleIssue = newIssue => {
    let issues = allIssues.slice();
    issues.push(newIssue);
    setAllIssues(issues);
    console.log(issues);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setAllIssues(issueList);
    }, 2000);
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueAdd, {
    AddSingleIssue: addSingleIssue
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
    allIssues: allIssues
  }));
};
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(IssueList, null));