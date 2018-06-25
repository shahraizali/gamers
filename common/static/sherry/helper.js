/**
 * Created by shahr on 4/29/2018.
 */
// Name: Delete Popup
// Requirements
// Jquery.js
// bootstrap.js
// modals.bootstrap.js
// Usage: add class "btn-delete"
$(document).on('click', '.btn-delete', function (event) {
    event.preventDefault();
    var self = $(this);
    var url = self[0].href;
    console.log(self[0].href)

    call_confirm_dialog(function (result) {
        if (!result) {
            return false;
        } else {
            window.location.href = url;
        }

    });
});
// Delete confirm dialog box
function call_confirm_dialog(callback) {
    BootstrapDialog.show({
        title: 'Warning',
        message: 'Action is irreversible, do you want to proceed?',
        type: BootstrapDialog.TYPE_DANGER,
        size: BootstrapDialog.SIZE_SMALL,
        buttons: [{
            label: 'No',
            cssClass: '-btn btn-sm btn-danger',
            action: function (dialog) {
                dialog.close();
                callback(0);
            }
        }, {
            label: 'Yes, Proceed',
            cssClass: '-btn btn-sm btn-primary btn-loading',
            action: function (dialog) {
                dialog.close();
                callback(1);
            }
        }]
    });
}

// Name: Print Function
// Requirements
// Usage: print_func(<id of div whose content we have to print>)
function print_func(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    w = window.open();
    w.document.write("<html> <head> <title class='hide_in_print'>Print</title>");
    w.document.write('<style>' +
        '@media print {' +
        '.col-md-3{' +
        ' width:33.33%;' +
        '}' +
        '.row{ width: 100%; display: block;}' +
        '.profile_box table td{ padding: 5px; }' +
        '.hide_in_print{display: none;}' +
        '}' +
        '</style> </head><body>');
    w.document.write(printContents);
    w.document.write("<hr/>");
    w.document.write("</body>");

    w.print();
    w.close();
}


function disable_button(id){
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.cursor = "not-allowed";

}

function enable_button(id) {
    document.getElementById(id).disabled = false;
    document.getElementById(id).style.cursor = "default";
}

function get_host(){
    var loc = window.location;
    return loc.host.toString();
}



function checkpass(p1, p2) {
    pass1 = $("#"+p1);
    pass2 = $("#"+p2);
    var error = document.getElementById('error');
    error.innerHTML = ""
    if (pass2.val() == "") {

    } else {
        if (pass1.val() != pass2.val()) {
            error = document.getElementById('error');
            error.innerHTML = "* Password did not match";
            pass1.css("border-color", "red");
            pass2.css("border-color", "red");
            document.getElementById("submit-form").disabled = true;
            document.getElementById("submit-form").style.cursor = "not-allowed";
        } else {
            error.innerHTML = ""
            pass1.css("border-color", "#d2d6de");
            pass2.css("border-color", "#d2d6de");
            document.getElementById("submit-form").disabled = false;
            document.getElementById("submit-form").style.cursor = "default";
        }
    }
}


function goBack() {
    window.history.back();
}

// Description
// Add zero in front of numbers is less than 10 i.e for time purpose 09, 04
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    ;  // add zero in front of numbers < 10
    return i;
}

// set the number to zero if less than zero
function nonNegative(obj) {
    value = obj.value
    if (value < 0)
        obj.value = 0;
}

// set the number to its positive value if negative
// minnimum value = 1
function positive_abs(obj) {
    value = obj.value
    if (value < 1) {

        if (value == 0) {
            obj.value = 1;
        } else {
            obj.value = obj.value * (-1);
        }

    }
}

// set the number to its positive value if negative
// minnimum value = 0
function abs(obj) {
    value = obj.value
    if (value < 0) {
        obj.value = obj.value * (-1);
    }
}

// Description
// Add/Remove rows in table
// Usage:
//          addRow(<id of table>)
//          deleteRow(<id of table>)
function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var colCount = table.rows[0].cells.length;

    for (var i = 0; i < colCount; i++) {

        var newcell = row.insertCell(i);

        newcell.innerHTML = table.rows[0].cells[i].innerHTML;
        //alert(newcell.childNodes);
        switch (newcell.childNodes[0].type) {
            case "number":
                newcell.childNodes[0].value = "";
                break;
            case "checkbox":
                newcell.childNodes[0].checked = false;
                break;
            case "select-one":
                newcell.childNodes[0].selectedIndex = 0;
                break;
        }
    }
}

function deleteRow(tableID) {
    try {
        var table = document.getElementById(tableID);
        var rowCount = table.rows.length;

        for (var i = 0; i < rowCount; i++) {
            var row = table.rows[i];
            var chkbox = row.cells[0].childNodes[0];
            if (null != chkbox && true == chkbox.checked) {
                if (rowCount <= 1) {
                    alert("Cannot delete all the rows.");
                    break;
                }
                table.deleteRow(i);
                rowCount--;
                i--;
            }


        }
    } catch (e) {
        alert(e);
    }
}


function get_detail(URL) {
    request = "{}";
    var response = [];
    jQuery.ajax({
        type: "get",
        async: false,
        url: URL,
        data: request,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            response = data;
        },
        error: function (data, XMLHttpRequest, responseText, errorThrown) {
            response = "error";
        }
    });
    return response;
}