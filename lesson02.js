const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия'));

if (temperatureInCelsius === 0) {
    console.log(temperatureInCelsius); 
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsius > 0) {
    console.log(temperatureInCelsius); 
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
console.log(temperatureInCelsius); 
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);