
//1. Используйте прототипное наследование. Объявить класс под названием “Laptop”
//2. Класс “Laptop”. У каждого нового ноутбука есть “название”, “модель”, ”серийный номер” “год изготовления”, “размер ОЗУ”, “размер ПЗУ”, “масса”. Учтите, что сейчас ноутбуки выпускаются без дисководов, и также присутствует вебкамера. Есть метод который выводит количество «ОЗУ и ПЗУ». Есть метод, который выводит название и модель.
//3. Класс “Ultrabook”. Есть свойства: “название”, “модель ”, “ серийный номер ”, “ год изготовления ”, “размер ОЗУ”, “размер ПЗУ”. Учтите, что сейчас ультрабуки выпускаются без дисководов и есть вебкамера. Есть метод который выводит данные о названии, весе и год изготовления. Есть метод который выводит количество «размер ОЗУ и размер ПЗУ»

function Laptop(name, model, serialNumber, yearManufacture, sizeRam, sizeRom, isDrive, isCamera, weight){
    this.name = name;
    this.model = model;
    this.serialNumber = serialNumber;
    this.yearManufacture = yearManufacture;
    this.sizeRam = sizeRam;
    this.sizeRom = sizeRom;
    this.isDrive = isDrive;
    this.isCamera = isCamera;
    this.weight = weight;
}

Laptop.prototype.getRamRom = function(){
    return 'Размер ОЗУ, ПЗУ: ' + this.sizeRam + ', ' + this.sizeRom;
}

Laptop.prototype.getNameModel = function(){
    return 'Наименование, модель: ' + this.name + ', ' + this.model;
}



var laptop = new Laptop('ASUS', 512, 'FD321567', 2017, '8GB', '4GB', '2500g', false, true);

console.log(laptop.getNameModel());
console.log(laptop.getRamRom());


function Ultrabook(name, model, serialNumber, yearManufacture, sizeRam, sizeRom, isDrive, isCamera, weight){
    Laptop.call(this, name, model, serialNumber, yearManufacture, sizeRam, sizeRom, isDrive, isCamera, weight);
}

Ultrabook.prototype = Object.create(Laptop.prototype);

Ultrabook.prototype.getNameWeightYearManufacture = function(){
    return 'Наименование модели, вес, год изготовления: ' + this.name + ', ' + this.weight + ', ' + this.yearManufacture;
}


var ultrabook = new Ultrabook('HP', 632, 'kj455476', 2015, '4GB', '4GB', false, true, '1200g');

console.log(ultrabook.getNameWeightYearManufacture());
console.log(ultrabook.getRamRom());
