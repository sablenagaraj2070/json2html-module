// json2html.js

export default function json2html(data) {
    // Start building the HTML table
    let html = `<table data-user="nagarajsable8@gmail.com">
        <thead>
          <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>`;

    // Populate table rows based on data array
    data.forEach(row => {
        html += "<tr>";
        html += `<td>${row.Name || ""}</td>`;
        html += `<td>${row.Age || ""}</td>`;
        html += `<td>${row.Gender || ""}</td>`;
        html += "</tr>";
    });

    // Close the table
    html += `
        </tbody>
      </table>`;

    return html;
}
