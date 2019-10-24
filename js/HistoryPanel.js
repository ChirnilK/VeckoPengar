/*
 * Den här panelen skulle visa månadenshistorik. 
 */
class HistoryPanel extends Panel {

    _image = ["/images/underkonstruktion.jpg"];

    onBackClick() {
        this._appObject.setState(APP_STATE_START);
    }

    render(html) {
        return html`
        <div> 
            <h2>Månadshistorik:</h2>
            <img src="${this._image}" id="image" height="200" width="300"> 
            <br>
            <br>
            <button click="onBackClick" type="button">Back</button>   
          </div>
        `
    }
}