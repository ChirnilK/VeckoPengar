/*
 * I den här panelen kan användare insätta pengar till sitt konto.
 */
class IncomePanel extends Panel {
    _status = "<p>Var snäll och skriva in alla informatiner. <br> Du får trycka Månad knappen en gång om månad då bestämmar datorn din månadenspeng. Lycka till!</p>";
    _points = 0;

    //När vi klickar på Add knappen...
    onAddTaskClick() {
        if (this._task == '' || this._date == '' || this._pris == '') {
            this._status = `<p style="color:red;">saknar information i en/flera fälte.</p>`
        }
        else {
            this._taskList.add(new Task(this._date, this._task, this._pris));  
            this._status = `<p style="color:green;">Informationen har sparat!</p>`
        }
        //Rensa inputboxarna
        this._task = '';
        this._pris = '';
        this._date = '';    
    }

    //När vi klickar på Reset knappen...
    onClearTaskClick() {
        this._appObject.setState(APP_STATE_INCOME);
    }

    //När vi klickar på Back knappen...
    onStartClick() {
        this._appObject.setState(APP_STATE_START);
    }

    //När vi klickar på Historik knappen...
    onHistoryClick() {
        this._appObject.setState(APP_STATE_HISTORY);
    }

    //När vi klickar på Månad knappen, då bestämmer datorn slumpvis månadenspeng mellan 30-100kr. 
    onMånadPengClick() {
        this._points += Math.floor(Math.random()*70+30);
        if (this._points>85){
            this._status = `<p style="color:green;">Grattis!! Din Månadenspeng är ${this._points} kr!</p>`
        }
        else {
            this._status = `<p style="color:green;">Din Månadenspeng är ${this._points} kr!</p>`
        }
    }

    render(html) {
        return html`<div>
   
        <form>
            <label for="title">Date :</label>
            <input type="text" bind="_date" placeholder="yyyy-mm-dd">
            <br>
            <br>
            <label for="title">Uppgift :</label>
            <select name="task" bind="_task" placeholder="Välj en uppgift">
                <option value="dammsuga">Dammsuga</option>
                <option value="diskmaskin">Plocka ur diskmaskinen</option>
                <option value="sopor">Gå och kasta sopor</option>
                <option value="tvätt">Sortera tvätten</option>
                <option value="ingenSpel">En 'Ingen skärm' dag</option>
                <option value="ingenSpel">Panta</option>
                <option value="månadPeng">Månad Pengar</option>
            </select>
            <br>
            <br>
            <label for ="title"> Priset    :</label>
            <input type ="text"  bind="_pris" placeholder="kr">
        </form>
        <br>
        <br>
        <div class="box">
            <button click="onAddTaskClick" id="add" type="button">Add</button> 
            <button click="onClearTaskClick" id="reset" type="button">Reset</button>
            <button click="onStartClick" id="back" type="button">Back</button>
            <button click="onHistoryClick" id="send" type="button">Historik</button>
            <button click="onMånadPengClick" id="lön" type="button">Månad</button>
        </div>
        ${this._status}
        <h4>${this._taskList}</h4>
        </div>
        `
    }
}
