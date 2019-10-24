/*
 * I den här panelen kan användare ta ut pengar till sitt konto.
 */
class OutcomePanel extends Panel {

    _status = "<p>Var snäll och skriva in alla informatiner</p>";

    //När vi klickar på Add knappen...
    onAddTaskClick() {
        if (this._task == '' || this._date == '' || this._pris == '') {
            this._status = `<p style="color:red;">saknar information i en/flera fälte.</p>`
            }
        else {
            this._taskList.add(new Task(this._date, this._task, this._pris));  //Lägg till ny uppgift
            this._status = `<p style="color:green;">Informationen har sparat!</p>`
            }
        //Rensa inputboxarna
        this._task = '';
        this._pris = '';
        this._date = '';   
    }

    //När vi klickar på Reset knappen...
    onClearTaskClick() {
        this._appObject.setState(APP_STATE_OUTCOME);
    }

    //När vi klickar på Back knappen...
    onStartClick() {
        this._appObject.setState(APP_STATE_START);
    }

    //När vi klickar på Historik knappen...
    onHistoryClick() {
        this._appObject.setState(APP_STATE_HISTORY);
    }

    render(html) {
        return html`<div>
        <form>
            <label for="title">Date :</label>
            <input type="text" bind="_date" placeholder="yyyy-mm-dd">
            <br>
            <br>
            <label for="title">Vad vill du spendera perngarna för :</label>
            <select name="task" bind="_task" placeholder="Välj en uppgift">
                <option value="spel">Spel</option>
                <option value="godis">Speciellt godis</option>
                <option value="present">Present</option>
            </select>
            <br>
            <br>
            <label for ="title"> Priset    :</label>
            <input type ="text"  bind="_pris" placeholder="skriv minus tecken">
        </form>
        <br>
        <br>
        <div class="box">
            <button click="onAddTaskClick" id="add" type="button">Add</button> 
            <button click="onClearTaskClick" id="reset" type="button">Reset</button>
            <button click="onStartClick" id="back" type="button">Back</button>
            <button click="onHistoryClick" id="send" type="button">Historik</button>
        </div>
        ${this._status}
        <h4>${this._taskList}</h4>
        </div>
        `
    }
}