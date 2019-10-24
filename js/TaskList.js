/*
 * Den här klassen är en samling av uppgifterna.
 * Den exponerar add metod som andra klasser kan använda.
 */
class TaskList extends Domer{

    _tasks = [];

    constructor(){
        super();
    }

    //Lägg till ett nytt ord till testet.
    add(newTask){
        this._tasks.push(newTask);
        console.log(this._tasks);
    }

    render(html) {
        return html`
        <div> 
            <h4>${this._tasks}</h4>
        </div>
        `
    }
}