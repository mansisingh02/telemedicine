var Feed = {
    obj: [{ name: 'Sparsh', email: 'sdas.sda@dsad', suggest: 'nothing' },
    { name: 'raghav', email: 'sdjalks.dmia@sldnsa', suggest: 'no' }]
    }
var Money = {
    obj: [{
    name: 'Sparsh ',
    company: 'SR',
    email: 'sdads@dsda',
    address: '1312,sdfs,312',
    phone: '98886676',
    amt: '123144'
    }, {
    name: 'Raghav',
    company: 'SRT',
    email: 'dadas@232.ds',
    address: '233,sdfsdf,3r3df',
    phone: '999887788',
    amt: '999990'
    }]
    }
    
    ///////////////////////////////////////////////////////////////////////////////
    var t = "<tbody>";
    for (var i = 0; i < Feed.obj.length; i++) {
    t += "<tr>";
    var x = Feed.obj[i];
    for (j in x) {
    t += "<td>" + x[j] + "</td>";
    }
    t += "</tr>";
    }
    t += "</tbody>";
    document.getElementById('feed_table').innerHTML += t;
    ///////////////////////////////////////////////////////////////////////////////
    var text = "<tbody>";
    for (var i = 0; i < Money.obj.length; i++) {
    text += "<tr>";
    var x = Money.obj[i];
    for (j in x) {
    if (j == 'amt') {
    text += "<td>₹ " + x[j] + "</td>";
    } else
    text += "<td>" + x[j] + "</td>";
    }
    text += "</tr>";
    }
    text += "</tbody>";
    document.getElementById('money_table').innerHTML += text;