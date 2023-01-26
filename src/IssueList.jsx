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

  // here we used hooks to maintain the state
  // react.usestate is a hook
  const [allIssues, setAllIssues] = React.useState([]);

  const allIssueRow = allIssues.map((issue) => (
    <IssueRow issue={issue} style={style} />
  ));
  // this is a function to set the issues using the hook's function setAllIssues
  setTimeout(() => {
    setAllIssues(issueList);
  }, 2000);

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
