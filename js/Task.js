
class Task extends Domer {

    _task = '';
    _pris = '';
    _date = '';

    //När vi skapar uppgiften skickar vi in dem i en uppsättning.
    constructor(date, task, pris) {
        super();
        this._task = task;
        this._pris = pris;
        this._date = date;
    }
    
    //Vi bindar ihåp innerhållet av input-fältet och den som vi vill använda i programmet.
    //readonly="readonly" för att inte kunna skriva om efter informationen sparat.
    render(html) {
        return html`
        <div> 
          <input type="text" bind="_task" readonly="readonly">
          <input type="text" bind="_pris" readonly="readonly">
          <input type="text" bind="_date" readonly="readonly">
        </div>
        `
    }
}