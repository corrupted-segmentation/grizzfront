function runSubmit() {
    $.ajax({
        url: "/inForm", 
        method: "POST",
        data: $('form').serialize(),
        success: () => {
            console.log("good job");
        },
        error: () => {
            console.log("fucked up");
        },
    });
}
