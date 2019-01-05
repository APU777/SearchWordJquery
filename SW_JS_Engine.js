let classNameForSpanPulse = "colorRed";
let classNameForSelectedWord = 2;
let checkWord = false;

 $(function () {
    $("#_Clear").on("click", function (event) {
        event.preventDefault();
        let text = $("#basicText").text().replace(/[\s]+/g, " ").trim();
        let sWord = $("#searchWord").val();

        let word = text.split(" ");
        let newHTML = "";
        $.each(word, function(index, value) {
            newHTML += "<span class='other'>" + value + "&nbsp;</span>";
        });

        $("#basicText").html(newHTML);

        let child = $("#basicText").children();
        let range = document.createRange();
        let sel = window.getSelection();
        range.setStart(child[child.length - 1], 1);
        // range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        $("#basicText")[0].focus();
    });

    $("#Yellow").on("click", function (event) {
        event.preventDefault();
        $("#spanPulse").removeClass(classNameForSpanPulse);
        classNameForSpanPulse = "colorYellow";
        $("#spanPulse").addClass(classNameForSpanPulse);
        classNameForSelectedWord = 1;
    });

    $("#Red").on("click", function (event) {
        event.preventDefault();
        $("#spanPulse").removeClass(classNameForSpanPulse);
        classNameForSpanPulse = "colorRed";
        $("#spanPulse").addClass(classNameForSpanPulse);
        classNameForSelectedWord = 2;
    });

    $("#Blue").on("click", function (event) {
        event.preventDefault();
        $("#spanPulse").removeClass(classNameForSpanPulse);
        classNameForSpanPulse = "colorBlue";
        $("#spanPulse").addClass(classNameForSpanPulse);
        classNameForSelectedWord = 3;
    })

    $("#Green").on("click", function (event) {
        event.preventDefault();
        $("#spanPulse").removeClass(classNameForSpanPulse);
        classNameForSpanPulse = "colorGreen";
        $("#spanPulse").addClass(classNameForSpanPulse);
        classNameForSelectedWord = 4;
    });



    $("#submitForm").on("submit", function (event) {
        checkWord = false;
        event.preventDefault();
        let text = $("#basicText").text().replace(/[\s]+/g, " ").trim();
        let sWord = $("#searchWord").val();

        let word = text.split(" ");
        let newHTML = "";

        $.each(word, function(index, value){
           if($("#partialCompliance").is(':checked') === true) {
               if (value.toUpperCase().indexOf(sWord.toUpperCase()) !== -1) {
                   switch (classNameForSelectedWord) {
                       case 1:
                           newHTML += "<span class='statementYellow'>" + value + "</span>&nbsp";
                           break;
                       case 2:
                           newHTML += "<span class='statementRed'>" + value + "</span>&nbsp";
                           break;
                       case 3:
                           newHTML += "<span class='statementBlue'>" + value + "</span>&nbsp";
                           break;
                       case 4:
                           newHTML += "<span class='statementGreen'>" + value + "</span>&nbsp";
                           break;
                   }
                   checkWord = true;
               } else {
                   newHTML += "<span class='other'>" + value + "&nbsp;</span>";
               }
           }
           else{
                 if(value.toUpperCase() === sWord.toUpperCase()) {
                     switch (classNameForSelectedWord) {
                         case 1:
                             newHTML += "<span class='statementYellow'>" + value + "</span>&nbsp";
                             break;
                         case 2:
                             newHTML += "<span class='statementRed'>" + value + "</span>&nbsp";
                             break;
                         case 3:
                             newHTML += "<span class='statementBlue'>" + value + "</span>&nbsp";
                             break;
                         case 4:
                             newHTML += "<span class='statementGreen'>" + value + "</span>&nbsp";
                             break;
                     }
                     checkWord = true;
                 }else{
                   newHTML += "<span class='other'>" + value + "&nbsp;</span>";
                 }
           }
        });

        $("#basicText").html(newHTML);

        let child = $("#basicText").children();
        let range = document.createRange();
        let sel = window.getSelection();
        range.setStart(child[child.length - 1], 1);
        // range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
        $("#basicText")[0].focus();

        if (checkWord === false){
            alert("Word is missing.");
        }
    });
});