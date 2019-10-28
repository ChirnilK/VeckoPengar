/*
 * Den här klassen är en samling av uppgifterna.
 * Den exponerar add- och clearAnswers metod som andra klasser kan använda.
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

    //Töm alla svarsrutorna  
    clearAnswers(){
       this._tasks=[];
    }


    render(html) {
        return html`
        <div> 
            <h4>${this._tasks}</h4>
        </div>
        `
    }
}