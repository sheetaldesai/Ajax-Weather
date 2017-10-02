$(document).ready (function () {
    $('form').submit (function () {
        var url = "http://api.openweathermap.org/data/2.5/weather?q=",
            key = 'b102e1472900a02a0344bc5ccac89102',
            city = $("#city").val();

        url = url + city + "&APPID=" + key;
        console.log(url);    

        $.get(url,(res)=> {
            console.log(res);
            var temp = Math.round(res.main.temp * (9/5) - 459.67);
            console.log(temp);
            $("#result").html(`
                <h1>${res.name}</h1>
                <label class="temp">Temparature:</label>
                <label class="temp">${temp}</lable>
            `);
            $('#result').addClass("border");

        });
        event.preventDefault();

    
    });

});