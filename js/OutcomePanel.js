/*
 * I den här panelen kan användare ta ut pengar till sitt konto.
 */
class OutcomePanel extends Panel {

    _status = "<p>Var snäll och skriva in i alla fält</p>";

    //När vi klickar på Add knappen...
    onAddTaskClick() {
        if (this._task == '' || this._date == '' || this._pris == '') {
            this._status = `<p style="color:red;">saknar information i en/flera fält.</p>`
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
        <ul>
            <li class="date">
                <label for="date">Date :</label>
                <input id="date" name="date" type="text" style='width:250px' bind="_date" placeholder="yyyy-mm-dd">
            </li>
            <br>
            <li class="task">
                <label for="title">Reson :</label>
                <br>
                <select name="task" bind="_task" style='width:250px' placeholder="Välj en uppgift">
                <option value="Spel">Spel</option>
                <option value="Godis">Speciellt godis</option>
                <option value="Present">Present</option>
                </select>
                </li>
            <br>
                <li class="pris">
                    <label for ="pris"> Priset :</label>
                    <input id="pris" type ="text"  bind="_pris" style='width:250px' placeholder="Skriv minus tecken ">
                </li>
            </ul>
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