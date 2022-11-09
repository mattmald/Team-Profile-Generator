const generateTeam = team => {
    
    const generateManager = manager => {
        return `
        manager
        `
    }

    const generateEngineer = enginner => {
        return `
        enginner
        `
    }
    //need interns
    //build html format 
    const html = [];

    //need for all members
    html.push(team 
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)))

    return html.join("")

  
}
modoule.exports = team => {
    return `
    // base html + whats written at the top 
    <!DOCTYPE html>

    <head>
    </head>

    <div class=''>
    ${generateTeam(team)}
    </div>
    `
}
