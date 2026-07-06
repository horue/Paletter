const add = document.getElementById('add-button');
const saveButton = document.getElementById('save-button');
const colorDialog = document.getElementById('color-dialog');
var colorList = document.getElementById('color-list');
var colors = [];
var color = '#008000';




add.addEventListener('click', () => {
    colorDialog.showModal();
});

saveButton.addEventListener('click', () => {
    colors.push(document.getElementById('color-input').value);
    colorList.innerHTML = colors.map(color => `<span class="material-icons" style="color: ${color}">circle</span>`).join('');
    colorDialog.close();
});

colorDialog.addEventListener('close', () => {
    const colorInput = document.getElementById('color-input');
});

