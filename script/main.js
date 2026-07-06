const add = document.getElementById('add-button');
const saveButton = document.getElementById('save-button');
const colorDialog = document.getElementById('color-dialog');
const colorInput = document.getElementById('color-input');
var colorList = document.getElementById('color-list');
var colors = [];
var color = '#008000';




add.addEventListener('click', () => {
    colorDialog.showModal();
});

saveButton.addEventListener('click', () => {
    colors.push(document.getElementById('color-input').value);
    colorList.innerHTML = colors.map(color => `<button class="color-button"><span class="material-icons large-icon" style="color: ${color}">circle</span></button>`).join('');
    colorDialog.close();
});


colorInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            colors.push(document.getElementById('color-input').value);
            colorList.innerHTML = colors.map(color => `<button class="color-button"><span class="material-icons large-icon" style="color: ${color}">circle</span></button>`).join('');
        }
        colorDialog.close();
    }
);
