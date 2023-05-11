    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
        <style>
            * {
                box-sizing: border-box;
            }
            body {
                font-family: sans-serif;
                margin: 0;
            }
            .header {
                background-color: rgb(62, 62, 238);
                color: white;
                padding: 20px;
                text-align: center;
            }
            .card {
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                margin: 20px;
                overflow: hidden;
                width: 300px;
            }
            .card-header {
                background-color: rgb(62, 62, 238);
                color: white;
                padding: 10px;
                text-align: center;
            }
            .card-header h2 {
                margin: 0;
            }
            .card-body {
                padding: 10px;
            }
            .card-body ul {
                list-style: none;
                margin: 0;
                padding: 0;
            }
            .card-body li {
                margin: 5px 0;
            }
            .card-body li span {
                font-weight: bold;
                margin-right: 5px;
            }
            .card-body li:last-child {
                margin-bottom: 0;
            }
        </style>
    </head>
    <body>
        <header class="header">
            <h1>My Team</h1>
        </header>
        <main>
            <div class="container">
                ${generateCards(team)}
            </div>
        </main>
    </body>
    </html>
    `;
    
    // Generate HTML for each employee card
    function generateCards(team) {
        let cardsHTML = "";
        for (let i = 0; i < team.length; i++) {
            const employee = team[i];
            let cardHTML = `
                <div class="card">
                    <div class="card-header">
                        <h2>${employee.getName()}</h2>
                        <h3>${employee.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul>
                            <li><span>ID:</span>${employee.getId()}</li>z
                            <li><span>Email:</span><a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                            ${generateRoleSpecificInfo(employee)}
                        </ul>
                    </div>
                </div>
            `;
            cardsHTML += cardHTML;
        }
        return cardsHTML;
    }
    
    