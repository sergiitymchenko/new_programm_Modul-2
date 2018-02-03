const TABA = `Таба`;
const SHARM = `Шарм-ель-Шейх`;
const HURGADA = `Хургада`;

let btn = document.querySelector('#btn').onclick = () => {
    let name = prompt(`Вибрати місто для відпочинку:
        ${TABA} - натисніть 1
        ${SHARM} - натисніть 2
        ${HURGADA} - натисніть 3
        `);
    if(name == 1){
        name =TABA;
        alert(`Ви вибрали курорт ${TABA}`);
    } else if(name == 2){
        name = SHARM;
        alert(`Ви вибрали курорт ${SHARM}`);
    } else if(name == 3){
        name = HURGADA;
        alert(`Ви вибрали курорт ${HURGADA}`);
    } else {
        alert(`Сам туди лети`);
    }
}
