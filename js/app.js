var baseUrl = 'https://www.scorebat.com/api/competition/3/';

var $leageName = "iran-gulf-pro-league";

// iran-gulf-pro-league
// spain-la-liga
// england-premier-league

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
        // for (i = 0; i < req.response.standings.rows.length; i++) {
        //     var teams = [];
        //     var teams = req.response.standings.rows[i].team;
        //     console.log(teams);
        // };
        // test
        let massPopChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: 
                    [   req.response.standings.rows[0].team,
                        req.response.standings.rows[1].team,
                        req.response.standings.rows[2].team,
                        req.response.standings.rows[3].team,
                        req.response.standings.rows[4].team,
                        req.response.standings.rows[5].team,
                        req.response.standings.rows[6].team,
                        req.response.standings.rows[7].team,
                        req.response.standings.rows[8].team,
                        req.response.standings.rows[9].team,
                        req.response.standings.rows[10].team,
                        req.response.standings.rows[11].team,
                        req.response.standings.rows[12].team,
                        req.response.standings.rows[13].team,
                        req.response.standings.rows[14].team,
                        req.response.standings.rows[15].team,
                    ],
            datasets: [
                {
                    label: 'امتیاز',
                    data: [
                        req.response.standings.rows[0].pnt,
                        req.response.standings.rows[1].pnt,
                        req.response.standings.rows[2].pnt,
                        req.response.standings.rows[3].pnt,
                        req.response.standings.rows[4].pnt,
                        req.response.standings.rows[5].pnt,
                        req.response.standings.rows[6].pnt,
                        req.response.standings.rows[7].pnt,
                        req.response.standings.rows[8].pnt,
                        req.response.standings.rows[9].pnt,
                        req.response.standings.rows[10].pnt,
                        req.response.standings.rows[11].pnt,
                        req.response.standings.rows[12].pnt,
                        req.response.standings.rows[13].pnt,
                        req.response.standings.rows[14].pnt,
                        req.response.standings.rows[15].pnt,
                    ],
                    backgroundColor: 'rgb(255, 205, 86, .1)',
                    borderColor: 'rgb(255, 205, 86)',
                    borderWidth: 2,
                    tension: .5,
                    fill: true
                },
                {
                    label: 'گل های زده',
                    data: [
                        req.response.standings.rows[0].fa1,
                        req.response.standings.rows[1].fa1,
                        req.response.standings.rows[2].fa1,
                        req.response.standings.rows[3].fa1,
                        req.response.standings.rows[4].fa1,
                        req.response.standings.rows[5].fa1,
                        req.response.standings.rows[6].fa1,
                        req.response.standings.rows[7].fa1,
                        req.response.standings.rows[8].fa1,
                        req.response.standings.rows[9].fa1,
                        req.response.standings.rows[10].fa1,
                        req.response.standings.rows[11].fa1,
                        req.response.standings.rows[12].fa1,
                        req.response.standings.rows[13].fa1,
                        req.response.standings.rows[14].fa1,
                        req.response.standings.rows[15].fa1,
                    ],
                    backgroundColor: 'rgb(54, 162, 235, .5)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 2,
                    tension: 0,
                    // fill: true
                },
                {
                    label: 'گل های خورده',
                    data: [
                        req.response.standings.rows[0].fa2,
                        req.response.standings.rows[1].fa2,
                        req.response.standings.rows[2].fa2,
                        req.response.standings.rows[3].fa2,
                        req.response.standings.rows[4].fa2,
                        req.response.standings.rows[5].fa2,
                        req.response.standings.rows[6].fa2,
                        req.response.standings.rows[7].fa2,
                        req.response.standings.rows[8].fa2,
                        req.response.standings.rows[9].fa2,
                        req.response.standings.rows[10].fa2,
                        req.response.standings.rows[11].fa2,
                        req.response.standings.rows[12].fa2,
                        req.response.standings.rows[13].fa2,
                        req.response.standings.rows[14].fa2,
                        req.response.standings.rows[15].fa2,
                    ],
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
