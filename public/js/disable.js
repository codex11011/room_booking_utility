console.log("wowowow");

$(document).ready(function () {
    $("button").click(function () {
        //     $.get('/profile', function(data){
        //       console.log(data.bk);
        // // you may use "data" to access the underlying data
        //     })
        $(this).toggleClass("btn-small btn-danger submit_list");
        $(this).text(function (i, v) {
            return v === 'Book' ? 'Cancel' : 'Book';
        })
        let x = $(this).parents("li")
        let d = (x.children(".x").text().trim());
        let l = ((x.children(".y").text().match(/\d/g)[0]));
        let st = (x.children(".z")).text().trim().split("---")[0]
        let et = (x.children(".z")).text().trim().split("---")[1]
        let bk = (x.children(".w")).text().trim()
        obj = {}
        obj = { "day": d, "lt": l, "strttime": st, "endtime": et, "bk": bk }
        console.log(obj);
        $.ajax({
            type: 'POST',
            data: JSON.stringify(obj),
            contentType: 'application/json',
            url: 'http://localhost:3000/update_bk',
            success: function (json) {
                console.log("success");

            },
            error: function (error) {
                console.log("error");
            }
        });
    });

});
