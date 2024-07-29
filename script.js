const exportButton = document.querySelector(".export-btn");
const exportHTMLTableToCSV = (selector) => {
  const table = document.querySelector(selector);
  const rows = Array.from(table.rows);
  const teamMembers = rows.map((row) =>
    Array.from(row.cells).map((cell) => cell.innerText.replace(/\n/g, "|"))
  );

  const csvContent =
    "data:text/csv;charset=UTF-8," +
    teamMembers
      .map((teamMember) => Object.values(teamMember).join(","))
      .join("\n");
  const encodeuri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodeduri);
  link.setAttribute("download", "team-members.csv");
  document.body.appendChild(link);
  link.click();
};
exportButton.addEventListener("click", function () {
  exportHTMLTableToCSV(".table-widget > table");
});
