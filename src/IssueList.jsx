function IssueFilter() {
  return (
    <div>
      <h2>Welcome to IssueFilter</h2>
    </div>
  );
}

function IssueAdd() {
  return (
    <div>
      <h2>Welcome to IssueAdd</h2>
    </div>
  );
}

function IssueRow(props) {
  // if we use props as the arguement of issueRow and not {issue} we use props.issue.(particular property of issue that is passed)
  return (
    <tr style={props.style}>
      <td style={props.style}>{props.issue.Id}</td>
      <td style={props.style}>{props.issue.Owner}</td>
      <td style={props.style}>{props.issue.Status}</td>
      <td style={props.style}>{props.issue.Created}</td>
      <td style={props.style}>{props.issue.Effort}</td>
      <td style={props.style}>{props.issue.Due}</td>
      <td style={props.style}>{props.issue.Info}</td>
    </tr>
  );
}

function IssueTable() {
  const style = { border: "2px solid" };
  const issueList = [
    {
      Id: 1,
      Owner: "Person-A",
      Status: "Assigned",
      Created: "2023-01-20",
      Effort: 4,
      Due: "2023-01-30",
      Info: "This is the info",
    },
    {
      Id: 2,
      Owner: "Person-B",
      Status: "Assigned",
      Created: "2023-01-20",
      Effort: 8,
      Due: "2023-02-15",
      Info: "This is the info for task B",
    },
  ];
  const singleIssue = {
    Id: 3,
    Owner: "Person-C",
    Status: "Assigned",
    Created: "2023-01-20",
    Effort: 5,
    Due: "2023-02-15",
    Info: "This is the info for task C",
  };

  // here we used hooks to maintain the state
  // react.usestate is a hook
  const [allIssues, setAllIssues] = React.useState([]);
  const [counter, setCounter] = React.useState(0);

  const allIssueRow = allIssues.map((issue) => (
    <IssueRow issue={issue} style={style} />
  ));
  // this is a function to set the issues using the hook's function setAllIssues
  React.useEffect(() => {
    setTimeout(() => {
      setAllIssues(issueList);
    }, 2000);
  }, []); // this use effect sets the initial issueList
  React.useEffect(() => {
    addSingleIssue();
    console.log("hello " + counter);
  }, [counter]); // this adds the issue on btnClick

  // function to add that single issue list on button click
  const addSingleIssue = () => {
    let issues = allIssues.slice();
    issues.push(singleIssue);
    setAllIssues(issues);
  };

  return (
    <div>
      <h2>Welcome to IssueTable</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Created</th>
            <th>Efforts</th>
            <th>Due</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {allIssueRow}
          {/* // using foreach loop  */}
          {/* {issueList.forEach((issue) => {
            <IssueRow issue={issue} style={style} />;
          })} */}
          {/* <IssueRow issue={issueList} style={style} /> */}
        </tbody>
      </table>
      <button
        type="button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click ME
      </button>
    </div>
  );
}
const IssueList = () => {
  return (
    <div>
      <IssueFilter />
      <hr />
      <IssueAdd />
      <hr />
      <IssueTable />
    </div>
  );
};

const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render(<IssueList />);
