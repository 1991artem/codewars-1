
    // Функция удаляет заданные в ней символы
    function dellete (string){
        return string.replace(/[euioa]/g, '');
    }
    // Ввод комментария 
    var string = "Ths wbst s fr lsrs LOL!";

    // Результат удаления символов
    alert (dellete(string));
