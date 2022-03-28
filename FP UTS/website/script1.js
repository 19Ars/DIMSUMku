var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["judulberita"] = document.getElementById("judulberita").value;
    formData["tglpublish"] = document.getElementById("tglpublish").value;
    formData["deskripsi"] = document.getElementById("deskripsi").value;
    formData["laman"] = document.getElementById("laman").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("List-Berita").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.judulberita;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tglpublish;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.deskripsi;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.laman;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Hapus</a>`;
}

function resetForm() {
    document.getElementById("judulberita").value = "";
    document.getElementById("tglpublish").value = "";
    document.getElementById("deskripsi").value = "";
    document.getElementById("laman").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("judulberita").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tglpublish").value = selectedRow.cells[1].innerHTML;
    document.getElementById("deskripsi").value = selectedRow.cells[2].innerHTML;
    document.getElementById("laman").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.judulberita;
    selectedRow.cells[1].innerHTML = formData.tglpublish;
    selectedRow.cells[2].innerHTML = formData.deskripsi;
    selectedRow.cells[3].innerHTML = formData.laman;
}

function onDelete(td) {
    if (confirm('Apakah Anda Yakin Untuk Menghapus Data Tersebut?')) {
        row = td.parentElement.parentElement;
        document.getElementById("List-Berita").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("judulberita").value == "") {
        isValid = false;
        document.getElementById("judulberitaValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("judulberitaValidationError").classList.contains("hide"))
            document.getElementById("judulberitaValidationError").classList.add("hide");
    }
    return isValid;
}