/*
 * Den här klassen är en samling av uppgifterna.
 * Den exponerar add metod som andra klasser kan använda.
 */
class TaskList extends Domer{

    _tasks = [];

    constructor(){
        super();
    }

    //Lägg till en ny uppgift
    add(newTask){
        this._tasks.push(newTask);
    }

    /* //Töm alla svarsrutorna            det fungerar inte
    clearAnswers(){
        for (let task of this._tasks){
            task.reset();
        }
    } */

    render(html) {
        return html`
        <div> 
            <h4>${this._tasks}</h4>
        </div>
        `
    }
}