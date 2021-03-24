const dz = "8d603e7798c71de3143b697c4d95f39b";

function dan(des){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${des}&units=metric&APPID=${dz}`)
.then((res) => {
    console.log(res);
    return res.json();
})
.then((res) => {
    document.getElementById('placess').innerHTML=`<h1>${des}</h1>`;
    console.log(res.main.temp);
    document.getElementById('temps').innerHTML=`<h2>${res.main.temp}<sup>o</sup>C</h2>`;
    document.getElementById('weathers').innerHTML=`<h2>${res.weather[0].main}</h2>`;
    task();
})
.catch((e) => {
    console.log("Error teri wajah se");
    console.log(e);
})
}

bu.addEventListener('click', (e) => {
    console.log("AOMOSHIREZO");
    const des=document.getElementById('pla').value;
    console.log(des);
    dan(des);
})

function task()
{
    let p = new Date();
    let weekd = new Array(7);
    weekd[0]='Sunday';
    weekd[1]='Monday';
    weekd[2]='Tuesday';
    weekd[3]='Wednesday';
    weekd[4]='Thursday';
    weekd[5]='Friday';
    weekd[6]='Saturday';
    let z=weekd[p.getDay()];
    let mond = new Array(12);
    mond[0]='Jan';
    mond[1]='Feb';
    mond[2]='March';
    mond[3]='April';
    mond[4]='May';
    mond[5]='June';
    mond[6]='July';
    mond[7]='Aug';
    mond[8]='Sep';
    mond[9]='Oct';
    mond[10]='Nov';
    mond[11]='Dec';
    let i=mond[p.getMonth()];
    let e=p.getFullYear();
    let v=p.getDate();
    document.getElementById('days').innerHTML=`<h2>${z}</h2>`;
    document.getElementById('dates').innerHTML=`<h2>${v} ${i} ${e}</h2>`;
}