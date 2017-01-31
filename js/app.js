document.getElementById('issueInputForm').addEventListener('submit',saveIssue)

function createdTime(d){
  var d = new Date().getTime();
  return d
  console.log(d);
}

function saveIssue(e) {
  var issueTimeAtTo = document.getElementById('createdTime()')
  var issueDesc = document.getElementById('issueDescInput').value
  var issueSeverity = document.getElementById('issueSeverityInput').value
  var issueAssignedTo = document.getElementById('issueAssignedToInput').value
  var issueId = chance.guid()
  var issueStatus = 'Open'


  var issue = {
    createdTime: createdTime(),
    id: issueId,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

  console.log(issue)

  if(localStorage.getItem('issues') == null) {
    var issues = []
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))
  } else {
    var issues = JSON.parse(localStorage.getItem('issues'))
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))
  }

document.getElementById('issueInputForm').reset()
  fetchIssues()
  e.preventDefault()
}

console.log(createdTime())

function setStatusClosed(id) {
  var issues = JSON.parse(localStorage.getItem('issues'))
  for (var i = 0; i < issues.length; i++) {
   if (issues[i].id == id){
     issues[i].status = 'Closed'
    }
  }
  localStorage.setItem('issues', JSON.stringify(issues))
  fetchIssues()
    console.log("this is close button", + " "+ issues);
}
function setStatusDelete(id) {
  var issues = JSON.parse(localStorage.getItem('issues'))
  for (var i = 0; i < issues.length; i++) {
   if (issues[i].id == id){
     issues.splice(i,1)
    }
  }
  localStorage.setItem('issues', JSON.stringify(issues))
  fetchIssues()
    console.log("this is close button", + " "+ issues);
}

function fetchIssues() {
  var issues = JSON.parse(localStorage.getItem('issues'))
  var issuesList = document.getElementById('issuesList')
  issuesList.innerHTML = ''

  for (var i = 0; i < issues.length; i++) {
    var id =issues[i].id
    var desc = issues[i].description
    var severity = issues[i].severity
    var assignedTo = issues[i].assignedTo
    var status = issues[i].status
    var createdAt = issues[i].createdTime

issuesList.innerHTML +=   '<div class="well">'+
                          '<h6>Issue ID: ' + id + '</h6>'+
                          '<h6>Time Created: ' + createdAt + '</h6>'+
                          '<p><span class="label label-info">' + status + '</span></p>'+
                          '<h3>' + desc + '</h3>'+
                          '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>'+
                          '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                          '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                          '<a href="#" onclick="setStatusDelete(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                          '</div>';
}
}
