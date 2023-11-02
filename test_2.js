let statistics = [
  { date: new Date("2023.11.10"), number_Messages: 3, message_Participants: 1 },
  { date: new Date("2022.12.23"), number_Messages: 6, message_Participants: 2 },
  {
    date: new Date("2003.12.23"),
    number_Messages: 20,
    message_Participants: 10,
  },
  {
    date: new Date("2023.12.22"),
    number_Messages: 17,
    message_Participants: 14,
  },
  { date: new Date("2021.12.13"), number_Messages: 6, message_Participants: 2 },
];

function formatDate(date) {
  return date.getDate() + " " + date.getMonth() + " " + date.getFullYear();
}
statistics[2].date.get;
function createTr(elem, obj) {
  let tr = document.createElement("tr");
  tr.insertAdjacentHTML("beforeend", `<td>${formatDate(obj.date)}</td>`);
  tr.insertAdjacentHTML("beforeend", `<td>${obj.number_Messages}</td>`);
  tr.insertAdjacentHTML("beforeend", `<td>${obj.message_Participants}</td>`);
  elem.append(tr);
}
function createTable(elem, obj) {
  for (const el of obj) {
    createTr(elem, el);
  }
}

function addLine(elem, obj) {
  createTr(elem, obj);
}


let container = document.getElementsByTagName("tbody")[0];
createTable(container, statistics);

