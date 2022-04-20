var baseUrl = 'https://www.scorebat.com/api/competition/3/';

// var $leageName = "iran-gulf-pro-league";
var $leageName = "spain-la-liga";
// var $leageName = "england-premier-league";

var iranLeage = document.getElementById('iranLeage');
var spainLeage = document.getElementById('spainLeage');
var englandLeage = document.getElementById('englandLeage');

function loadJSON(method, url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response));
        };
    };
    xhr.send();
};
    loadJSON('GET', `${baseUrl}${$leageName}/?_=1645601509026&sf=1`, function(req) {
        // ChartJS
        let myChart = document.getElementById('myChart').getContext('2d');
        Chart.defaults.font.family = 'iranyekan';
        Chart.defaults.plugins.tooltip.rtl = 'true';
        Chart.defaults.plugins.legend.rtl = 'true';
        Chart.defaults.plugins.legend.textDirection = 'rtl';
        // test
        var teams = [];
        var pnts = [];
        var fa1s = [];
        var fa2s = [];
        var numberPnts =[];
        var numberFa1s =[];
        var numberFa2s =[];
        for (var i = 0; i < req.response.standings.rows.length; i++) {
            var team = req.response.standings.rows[i].team;
            var pnt = req.response.standings.rows[i].pnt;
            var fa1 = req.response.standings.rows[i].fa1;
            var fa2 = req.response.standings.rows[i].fa2;
            teams.push([team]);
            pnts.push([pnt]);
            fa1s.push([fa1]);
            fa2s.push([fa2]);
            numberPnts.push(parseInt(pnts[i]));
            numberFa1s.push(parseInt(fa1s[i]));
            numberFa2s.push(parseInt(fa2s[i]));
        };
        // test
        let massPopChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: 
                           teams,
            datasets: [
                {
                    label: 'امتیاز',
                    data: numberPnts,
                    backgroundColor: 'rgb(255, 205, 86, .1)',
                    borderColor: 'rgb(255, 205, 86)',
                    borderWidth: 2,
                    tension: .5,
                    fill: true
                },
                {
                    label: 'گل های زده',
                    data: numberFa1s,
                    backgroundColor: 'rgb(54, 162, 235, .5)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 2,
                    tension: 0,
                    // fill: true
                },
                {
                    label: 'گل های خورده',
                    data: numberFa2s,
                    backgroundColor: 'rgba(255, 99, 132, .5)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 2,
                    tension: 0,
                    // fill: true
                }     
            ]
        },
        options: {
            animations: {
                y: {
                  easing: 'easeInOutElastic',
                  from: (ctx) => {
                    if (ctx.type === 'data') {
                      if (ctx.mode === 'default' && !ctx.dropped) {
                        ctx.dropped = true;
                        return 0;
                      }
                    }
                  }
                }
              },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    // ChartJS
    });
